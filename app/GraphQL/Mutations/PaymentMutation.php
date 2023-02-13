<?php

namespace App\GraphQL\Mutations;

use App\Constants\FileFolders;
use App\Models\BankAccount;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use App\Exceptions\ValidationException;
use Exception;

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
        $data = collect($args)->only(['transaction_date', 'bank_account_id', "to_bank_account_id", "to", "transaction_amount", "amount_in_words", "reason", "project"]);

        DB::beginTransaction();
        $bankAccount = BankAccount::find($args['bank_account_id']);

        $dispatch = Payment::create($data->toArray());
        
        $bankAccount->balance -= $args['transaction_amount'];
        $bankAccount->save();

        if($args['to_bank_account_id'] != null) {
            $toBankAccount = BankAccount::find($args['to_bank_account_id']);
            $toBankAccount->balance += $args['transaction_amount'];
            $toBankAccount->save();
        }
        DB::commit();

        return $dispatch;
    }
}
