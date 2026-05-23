<?php

namespace App\GraphQL\Mutations;

use App\Constants\FileFolders;
use App\Models\BankAccount;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

final class BankAccountMutation
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
        $data = collect($args)->only(["account_number", "balance", "initial_balance", "blocked_amount", "branch", "bank_id", "description"]);

        $bankAccount = BankAccount::create($data->toArray());

        try {
            if ($args['check_image']) {
                // $bankAccount->media()->delete();
                $bankAccount->addMedia($args['check_image'])->toMediaCollection(FileFolders::CHECK);
            }
        } catch (Exception $exception) {
        }

        return $bankAccount;
    }

    public function update($rootValue, array $args)
    {
        $bankAccount = BankAccount::find($args["id"]);

        // `balance` is never accepted directly from the client: it is a derived
        // figure maintained by deposit/payment mutations. Letting the edit form
        // post a (possibly stale) balance silently desyncs it from the
        // transactions. The only sanctioned way to seed it is via initial_balance
        // on an account that has no transactions yet.
        $allowedFields = ["id", "account_number", "blocked_amount", "branch", "bank_id", "description", "check_template_data"];
        $hasNoTransactions = !$bankAccount->deposits()->exists() && !$bankAccount->payments()->exists();

        if ($hasNoTransactions) {
            $allowedFields[] = "initial_balance";
        }

        $data = collect($args)->only($allowedFields)->toArray();

        if ($hasNoTransactions && isset($args['initial_balance'])) {
            $data['balance'] = $args['initial_balance'];
        }

        $bankAccount->update($data);

        try {
            if ($args['check_image']) {
                $bankAccount->media()->delete();
                $bankAccount->addMedia($args['check_image'])->toMediaCollection(FileFolders::CHECK);
            }
        } catch (Exception $exception) {
        }

        return $bankAccount;
    }

    public function delete($rootValue, array $args)
    {
        $bankAccount = BankAccount::find($args["id"]);

        if ($bankAccount->deposits()->exists() || $bankAccount->payments()->exists()) {
            return [
                'message' => "Linked resources exists",
                'status' => 'SUCCESS',
            ];
        } else {
            $bankAccount->delete();
            return $bankAccount;
        }
    }

    public function updateBankAccountTemplate($rootValue, array $args)
    {
        $bankAccount = BankAccount::find($args["id"]);
        $bankAccount->check_template_data = $args['check_template_data'];
        $bankAccount->save();
        return $bankAccount;
    }
}
