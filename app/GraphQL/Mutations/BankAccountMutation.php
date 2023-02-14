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
        $data = collect($args)->only(["account_number", "balance", "initial_balance", "branch", "bank_id", "description"]);

        $bankAccount = BankAccount::create($data);

        try {
            if($args['check_image']){
                // $bankAccount->media()->delete();
                $bankAccount->addMedia($args['check_image'])->toMediaCollection(FileFolders::CHECK);
            }
        } catch(Exception $exception) {}
        
        return $bankAccount;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only(["id", "account_number", "balance", "initial_balance", "branch", "bank_id", "description", "check_template_data"]);

        Log::debug($data);
        $bankAccount = BankAccount::find($args["id"]);

        $bankAccount->update($data->toArray());

        try {
            if($args['check_image']){
                $bankAccount->media()->delete();
                $bankAccount->addMedia($args['check_image'])->toMediaCollection(FileFolders::CHECK);
            }
        } catch(Exception $exception) {}
        
        return $bankAccount;
    }
}
