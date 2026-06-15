<?php

namespace App\GraphQL\Mutations;

use App\Constants\FileFolders;
use App\Models\BankAccount;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use App\Exceptions\ValidationException;
use App\Models\Configuration;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Log;

final class PaymentMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function store($rootValue, array $args)
    {
        $data = collect($args)->only([
            'transaction_date',
            'bank_account_id',
            "to_bank_account_id",
            "to",
            "transaction_amount",
            "amount_in_words",
            "payment_method",
            "reason",
            "project",
            "cheque_number"
        ]);

        DB::beginTransaction();
        $data['invoice_number'] = "-----/----";
        $payment = Payment::create($data->toArray());

        DB::commit();

        return $payment;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only([
            'transaction_date',
            'bank_account_id',
            "to_bank_account_id",
            "to",
            "transaction_amount",
            "amount_in_words",
            "payment_method",
            "reason",
            "project",
            "cheque_number"
        ]);
        DB::beginTransaction();

        $payment = Payment::find($args['id']);

        //old payment clean up section start
        if ($payment->to_bank_account_id ?? null) {
            $_toBankAccount = BankAccount::find($payment->to_bank_account_id);
            $_toBankAccount->balance -= $payment->transaction_amount;
            $_toBankAccount->save();

            $payment->to_bank_account_id = null;
            $payment->save();
        }

        $old_bank_account = BankAccount::find($payment->bank_account_id);
        $old_bank_account->balance += $payment->transaction_amount;
        $old_bank_account->save();
        //old payment clean up section end

        $bankAccount = BankAccount::find($args['bank_account_id']);
        $newBalance = $bankAccount->balance - $args['transaction_amount'];
        if ($newBalance < $bankAccount->blocked_amount) {
            DB::rollBack();
            return [
                'message' => "Insufficient balance: account balance would fall below blocked amount ({$bankAccount->blocked_amount})",
                'status' => 'Error',
            ];
        }

        if ($args['to_bank_account_id'] ?? null) {
            $toBankAccount = BankAccount::find($args['to_bank_account_id']);
            $toBankAccount->balance += $args['transaction_amount'];
            $toBankAccount->save();
        }

        $payment->update($data->toArray());

        $bankAccount->refresh();
        $bankAccount->balance -= $args['transaction_amount'];
        $bankAccount->save();

        DB::commit();

        return $payment;
    }
    public function void($rootValue, array $args)
    {
        DB::beginTransaction();
        $payment = Payment::find($args['id']);

        if ($payment->voided) {
            return [
                'message' => "Already Voided",
                'status' => 'Error',
            ];
        }

        if (!$payment->approved) {
            return [
                'message' => "Payment is not approved yet",
                'status' => 'Error',
            ];
        }

        if ($payment->to_bank_account_id ?? null) {
            $toBankAccount = BankAccount::find($payment->to_bank_account_id);
            $remainingBalance = $toBankAccount->balance - $payment->transaction_amount;
            if ($remainingBalance < $toBankAccount->blocked_amount) {
                return [
                    'message' => "Cannot void: destination account balance would fall below blocked amount ({$toBankAccount->blocked_amount})",
                    'status' => 'Error',
                ];
            }
            $toBankAccount->balance -= $payment->transaction_amount;
            $toBankAccount->save();
        }

        $bankAccount = BankAccount::find($payment->bank_account_id);
        $bankAccount->balance += $payment->transaction_amount;
        $bankAccount->save();

        $payment->voided_reason = $args['voided_reason'];
        $payment->voided_at = Carbon::now();
        $payment->voided_by_id = User::get()->first()->id;
        $payment->voided = true;
        $payment->save();

        DB::commit();

        return $payment;
    }

    public function approve($rootValue, array $args)
    {
        $payment = Payment::find($args['id']);

        if ($payment->approved) {
            return [
                'message' => "Already Approved",
                'status' => 'Error',
            ];
        }

        DB::beginTransaction();

        $config = Configuration::orderBy('created_at', 'desc')->lockForUpdate()->first();
        $shouldGenerateVoucherNumber = $payment->payment_method == "Check" || ($config && $config->voucher_for_all);
        if (
            $shouldGenerateVoucherNumber &&
            (!$payment->invoice_number || $payment->invoice_number == "-----/----")
        ) {
            $config->document_no++;
            $config->save();
            $payment->invoice_number = $config->document_label . "/" . $config->document_no;
        }

        $bankAccount = BankAccount::find($payment->bank_account_id);
        $remainingBalance = $bankAccount->balance - $payment->transaction_amount;
        if ($remainingBalance < $bankAccount->blocked_amount) {
            return [
                'message' => "Insufficient balance: account balance would fall below blocked amount ({$bankAccount->blocked_amount})",
                'status' => 'Error',
            ];
        }

        if ($payment->to_bank_account_id ?? null) {
            $toBankAccount = BankAccount::find($payment->to_bank_account_id);
            $toBankAccount->balance += $payment->transaction_amount;
            $toBankAccount->save();
        }

        $bankAccount->balance -= $payment->transaction_amount;
        $bankAccount->save();

        $payment->approved_at = Carbon::now();
        $payment->approved_by_id = User::get()->first()->id;
        $payment->approved = true;
        $payment->save();

        DB::commit();

        return $payment;
    }

    public function check($rootValue, array $args)
    {
        $payment = Payment::find($args['id']);

        if ($payment->checked) {
            return [
                'message' => "Already Checked",
                'status' => 'Error',
            ];
        }

        $payment->checked_at = Carbon::now();
        $payment->checked_by_id = User::get()->first()->id;
        $payment->checked = true;
        $payment->save();

        return $payment;
    }

    public function delete($rootValue, array $args)
    {
        DB::beginTransaction();

        $payment = Payment::find($args["id"]);

        if ($payment->approved && !$payment->voided) {
            if ($payment->to_bank_account_id ?? null) {
                $toBankAccount = BankAccount::find($payment->to_bank_account_id);
                $remainingBalance = $toBankAccount->balance - $payment->transaction_amount;
                if ($remainingBalance < $toBankAccount->blocked_amount) {
                    DB::rollBack();
                    return [
                        'message' => "Cannot delete: destination account balance would fall below blocked amount ({$toBankAccount->blocked_amount})",
                        'status' => 'Error',
                    ];
                }
                $toBankAccount->balance -= $payment->transaction_amount;
                $toBankAccount->save();
            }

            $bankAccount = BankAccount::find($payment->bank_account_id);
            $bankAccount->balance += $payment->transaction_amount;
            $bankAccount->save();
        }
        $payment->delete();

        DB::commit();
    }

    public function export($rootValue, array $args)
    {
        Log::debug($args);
    }
}
