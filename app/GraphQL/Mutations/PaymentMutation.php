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
        try {
            $data['invoice_number'] = "-----/----";
            $payment = Payment::create($data->toArray());

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

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
        ])->toArray();

        // A transfer edited into a plain payment must drop its old destination,
        // so resolve the destination explicitly instead of keeping a stale one.
        $data['to_bank_account_id'] = $args['to_bank_account_id'] ?? null;

        DB::beginTransaction();
        try {
            $payment = Payment::lockForUpdate()->find($args['id']);

            if (!$payment) {
                DB::rollBack();
                return [
                    'message' => "Payment not found",
                    'status' => 'Error',
                ];
            }

            if ($payment->voided) {
                DB::rollBack();
                return [
                    'message' => "Cannot edit a voided payment",
                    'status' => 'Error',
                ];
            }

            // Balances only ever move at approve/void time. A pending payment has
            // had no balance effect, so editing it must not touch any account:
            // reversing/re-applying here is exactly what corrupted balances before.
            if ($payment->approved) {
                if ($payment->to_bank_account_id ?? null) {
                    $oldToBankAccount = BankAccount::lockForUpdate()->find($payment->to_bank_account_id);
                    $oldToBankAccount->balance -= $payment->transaction_amount;
                    $oldToBankAccount->save();
                }

                $oldBankAccount = BankAccount::lockForUpdate()->find($payment->bank_account_id);
                $oldBankAccount->balance += $payment->transaction_amount;
                $oldBankAccount->save();

                $bankAccount = BankAccount::lockForUpdate()->find($args['bank_account_id']);
                $newBalance = $bankAccount->balance - $args['transaction_amount'];
                if ($newBalance < $bankAccount->blocked_amount) {
                    DB::rollBack();
                    return [
                        'message' => "Insufficient balance: account balance would fall below blocked amount ({$bankAccount->blocked_amount})",
                        'status' => 'Error',
                    ];
                }

                if ($data['to_bank_account_id']) {
                    $toBankAccount = BankAccount::lockForUpdate()->find($data['to_bank_account_id']);
                    $toBankAccount->balance += $args['transaction_amount'];
                    $toBankAccount->save();
                }

                $bankAccount->balance -= $args['transaction_amount'];
                $bankAccount->save();
            }

            $payment->update($data);

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

        return $payment;
    }

    public function void($rootValue, array $args)
    {
        DB::beginTransaction();
        try {
            $payment = Payment::lockForUpdate()->find($args['id']);

            if ($payment->voided) {
                DB::rollBack();
                return [
                    'message' => "Already Voided",
                    'status' => 'Error',
                ];
            }

            if (!$payment->approved) {
                DB::rollBack();
                return [
                    'message' => "Payment is not approved yet",
                    'status' => 'Error',
                ];
            }

            if ($payment->to_bank_account_id ?? null) {
                $toBankAccount = BankAccount::lockForUpdate()->find($payment->to_bank_account_id);
                $remainingBalance = $toBankAccount->balance - $payment->transaction_amount;
                if ($remainingBalance < $toBankAccount->blocked_amount) {
                    DB::rollBack();
                    return [
                        'message' => "Cannot void: destination account balance would fall below blocked amount ({$toBankAccount->blocked_amount})",
                        'status' => 'Error',
                    ];
                }
                $toBankAccount->balance -= $payment->transaction_amount;
                $toBankAccount->save();
            }

            $bankAccount = BankAccount::lockForUpdate()->find($payment->bank_account_id);
            $bankAccount->balance += $payment->transaction_amount;
            $bankAccount->save();

            $payment->voided_reason = $args['voided_reason'];
            $payment->voided_at = Carbon::now();
            $payment->voided_by_id = User::get()->first()->id;
            $payment->voided = true;
            $payment->save();

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

        return $payment;
    }

    public function approve($rootValue, array $args)
    {
        DB::beginTransaction();
        try {
            $payment = Payment::lockForUpdate()->find($args['id']);

            if ($payment->approved) {
                DB::rollBack();
                return [
                    'message' => "Already Approved",
                    'status' => 'Error',
                ];
            }

            // Balance check comes first: a failed approval must not consume a
            // voucher number.
            $bankAccount = BankAccount::lockForUpdate()->find($payment->bank_account_id);
            $remainingBalance = $bankAccount->balance - $payment->transaction_amount;
            if ($remainingBalance < $bankAccount->blocked_amount) {
                DB::rollBack();
                return [
                    'message' => "Insufficient balance: account balance would fall below blocked amount ({$bankAccount->blocked_amount})",
                    'status' => 'Error',
                ];
            }

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

            if ($payment->to_bank_account_id ?? null) {
                $toBankAccount = BankAccount::lockForUpdate()->find($payment->to_bank_account_id);
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
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

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
        try {
            $payment = Payment::lockForUpdate()->find($args["id"]);

            // Only approved, non-voided payments have a live balance effect to
            // reverse; pending and voided ones must be deleted without touching
            // any account.
            if ($payment->approved && !$payment->voided) {
                if ($payment->to_bank_account_id ?? null) {
                    $toBankAccount = BankAccount::lockForUpdate()->find($payment->to_bank_account_id);
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

                $bankAccount = BankAccount::lockForUpdate()->find($payment->bank_account_id);
                $bankAccount->balance += $payment->transaction_amount;
                $bankAccount->save();
            }
            $payment->delete();

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function export($rootValue, array $args)
    {
        Log::debug($args);
    }
}
