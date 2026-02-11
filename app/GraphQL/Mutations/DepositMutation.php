<?php

namespace App\GraphQL\Mutations;

use App\Models\BankAccount;
use App\Models\Deposit;
use Illuminate\Support\Facades\DB;

final class DepositMutation
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
        $data = collect($args)->only(['transaction_date', 'bank_account_id', "reference_no", "currency", "transaction_amount", "check_type", "reason", "project"]);

        DB::beginTransaction();
        $bankAccount = BankAccount::find($args['bank_account_id']);

        $dispatch = Deposit::create([
            "transaction_amount" => $args["transaction_amount"], 
            'transaction_date' => $args["transaction_date"], 
            'bank_account_id' => $args["bank_account_id"], 
            "reference_no" => $args["reference_no"], 
            "check_type" => $args["check_type"], 
            "currency" => $args["currency"], 
            "project" => $args["project"], 
            "reason" => $args["reason"], 
        ]);
        
        $bankAccount->balance += $args['transaction_amount'];
        $bankAccount->save();
        DB::commit();

        return $dispatch;
    }

    public function delete($rootValue, array $args)
    {
        DB::beginTransaction();

        $deposit = Deposit::find($args["id"]);

        $bankAccount = BankAccount::find($deposit->bank_account_id);

        $remainingBalance = $bankAccount->balance - $deposit->transaction_amount;
        if ($remainingBalance < $bankAccount->blocked_amount) {
            DB::rollBack();
            return [
                'message' => "Cannot delete: account balance would fall below blocked amount ({$bankAccount->blocked_amount})",
                'status' => 'Error',
            ];
        }

        $bankAccount->balance -= $deposit->transaction_amount;
        $bankAccount->save();

        $deposit->delete();

        DB::commit();
    }

}
