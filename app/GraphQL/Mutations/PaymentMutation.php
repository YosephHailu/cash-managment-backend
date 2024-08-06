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
        $data = collect($args)->only(['transaction_date', 'bank_account_id', "to_bank_account_id", "to", "transaction_amount", "amount_in_words", 
            "payment_method", "reason", "project", "cheque_number"]);

        DB::beginTransaction();
        $config = Configuration::orderBy('created_at', 'desc')->first();

        if($data['payment_method'] == "Check" || $config->voucher_for_all) {
            $config->document_no++;
            $config->save();
            $data['invoice_number'] = $config->document_label . "/" . $config->document_no;
        } else {
            $data['invoice_number'] = "-----/----";
        }
        $payment = Payment::create($data->toArray());
        
        DB::commit();

        return $payment;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only(['transaction_date', 'bank_account_id', "to_bank_account_id", "to", "transaction_amount", "amount_in_words", 
            "payment_method", "reason", "project", "cheque_number"]);
        DB::beginTransaction();

        $payment = Payment::find($args['id']);

        //old payment clean up section start 
        if($payment->to_bank_account_id ?? null) {
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

        if($args['to_bank_account_id'] ?? null) {
            $toBankAccount = BankAccount::find($args['to_bank_account_id']);
            $toBankAccount->balance += $args['transaction_amount'];
            $toBankAccount->save();
        }

        $payment->update($data->toArray());
        
        $bankAccount = BankAccount::find($args['bank_account_id']);
        $bankAccount->balance -= $args['transaction_amount'];
        $bankAccount->save();

        DB::commit();

        return $payment;
    }
    public function void($rootValue, array $args)
    {
        DB::beginTransaction();
        $payment = Payment::find($args['id']);
        if($payment->voided) {
            return [
                'message' => "Already Voided",
                'status' => 'Error',
            ];
        }
        $payment->voided_reason = $args['voided_reason'];
        $payment->voided_at = Carbon::now();
        $payment->voided_by_id = User::get()->first()->id;
        $payment->voided = true;
        $payment->save();

        $bankAccount = BankAccount::find($payment->bank_account_id);
        $bankAccount->balance += $payment->transaction_amount;
        $bankAccount->save();
        DB::commit();

        return $payment;
    }

    public function approve($rootValue, array $args)
    {
        $payment = Payment::find($args['id']);

        if($payment->approved) {
            return [
                'message' => "Already Approved",
                'status' => 'Error',
            ];
        }

        DB::beginTransaction();
        if($payment->to_bank_account_id ?? null) {
            $toBankAccount = BankAccount::find($payment->to_bank_account_id);
            $toBankAccount->balance += $payment->transaction_amount;
            $toBankAccount->save();
            Log::debug($toBankAccount);
        }
        $bankAccount = BankAccount::find($payment->bank_account_id);
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
        
        if($payment->checked) {
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

        if($payment->approved && !$payment->voided) {
            $bankAccount = BankAccount::find($payment->bank_account_id);
            $bankAccount->balance += $payment->transaction_amount;
            $bankAccount->save();

            if($payment->to_bank_account_id ?? null) {
                $toBankAccount = BankAccount::find($payment->to_bank_account_id);
                $toBankAccount->balance -= $payment->transaction_amount;
                $toBankAccount->save();
            }
        }
        $payment->delete();

        DB::commit();
    }

    public function export($rootValue, array $args)
    {
        Log::debug($args);

        
    }
}
