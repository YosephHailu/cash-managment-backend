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
        DB::beginTransaction();
        try {
            $bankAccount = BankAccount::lockForUpdate()->find($args['bank_account_id']);

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
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

        return $dispatch;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only(['transaction_date', 'bank_account_id', "reference_no", "currency", "transaction_amount", "check_type", "reason", "project"]);

        DB::beginTransaction();
        try {
            $deposit = Deposit::lockForUpdate()->findOrFail($args['id']);

            $oldBankAccount = BankAccount::lockForUpdate()->find($deposit->bank_account_id);
            $sameAccount = $oldBankAccount->id == $args['bank_account_id'];

            if ($sameAccount) {
                $netBalance = $oldBankAccount->balance - $deposit->transaction_amount + $args['transaction_amount'];
                if ($netBalance < $oldBankAccount->blocked_amount) {
                    DB::rollBack();
                    return [
                        'message' => "Cannot update: account balance would fall below blocked amount ({$oldBankAccount->blocked_amount})",
                        'status' => 'Error',
                    ];
                }
            } else {
                $oldRemainingBalance = $oldBankAccount->balance - $deposit->transaction_amount;
                if ($oldRemainingBalance < $oldBankAccount->blocked_amount) {
                    DB::rollBack();
                    return [
                        'message' => "Cannot update: source account balance would fall below blocked amount ({$oldBankAccount->blocked_amount})",
                        'status' => 'Error',
                    ];
                }
            }

            $oldBankAccount->balance -= $deposit->transaction_amount;
            $oldBankAccount->save();

            $bankAccount = $sameAccount
                ? $oldBankAccount
                : BankAccount::lockForUpdate()->find($args['bank_account_id']);
            $bankAccount->balance += $args['transaction_amount'];
            $bankAccount->save();

            $deposit->update($data->toArray());

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

        return $deposit;
    }

    public function delete($rootValue, array $args)
    {
        DB::beginTransaction();
        try {
            $deposit = Deposit::lockForUpdate()->find($args["id"]);

            $bankAccount = BankAccount::lockForUpdate()->find($deposit->bank_account_id);

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
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

}
