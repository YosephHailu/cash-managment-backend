<?php

namespace App\Console\Commands;

use App\Models\BankAccount;
use App\Models\Deposit;
use App\Models\Payment;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RecomputeBankAccountBalances extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bank-accounts:recompute-balances
                            {--account= : Limit to a single bank account id}
                            {--apply : Persist the recomputed balances (without this flag the command only reports)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Recompute each bank account balance from initial_balance + deposits - approved/non-voided payments (+ incoming approved/non-voided transfers) and report or fix drift.';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $query = BankAccount::query();
        if ($accountId = $this->option('account')) {
            $query->whereKey($accountId);
        }

        $accounts = $query->with('bank')->get();
        if ($accounts->isEmpty()) {
            $this->warn('No bank accounts found.');
            return self::SUCCESS;
        }

        $apply = (bool) $this->option('apply');
        $rows = [];
        $driftCount = 0;

        DB::beginTransaction();
        try {
            foreach ($accounts as $account) {
                $computed = $this->computeBalance($account);
                $stored = (float) $account->balance;
                $diff = round($stored - $computed, 2);

                if (abs($diff) >= 0.01) {
                    $driftCount++;
                    if ($apply) {
                        $account->balance = $computed;
                        $account->save();
                    }
                    $rows[] = [
                        $account->id,
                        $account->bank?->name ?? '—',
                        $account->account_number,
                        number_format($stored, 2),
                        number_format($computed, 2),
                        number_format($diff, 2),
                        $apply ? 'fixed' : 'drift',
                    ];
                }
            }

            if ($apply) {
                DB::commit();
            } else {
                DB::rollBack();
            }
        } catch (\Throwable $e) {
            DB::rollBack();
            $this->error('Aborted, no changes written: ' . $e->getMessage());
            return self::FAILURE;
        }

        if (empty($rows)) {
            $this->info('All bank account balances are consistent. Nothing to do.');
            return self::SUCCESS;
        }

        $this->table(
            ['ID', 'Bank', 'Account #', 'Stored', 'Computed', 'Diff (stored-computed)', 'Status'],
            $rows
        );

        if ($apply) {
            $this->info("Repaired {$driftCount} account(s).");
        } else {
            $this->warn("{$driftCount} account(s) have drift. Re-run with --apply to fix them.");
        }

        return self::SUCCESS;
    }

    /**
     * Reconstruct the balance the same way the mutations maintain it:
     *   initial_balance
     *   + all deposits
     *   - approved & non-voided payments leaving this account
     *   + approved & non-voided payments transferred into this account
     */
    private function computeBalance(BankAccount $account): float
    {
        $deposits = (float) Deposit::where('bank_account_id', $account->id)
            ->sum('transaction_amount');

        $outgoing = (float) Payment::where('bank_account_id', $account->id)
            ->where('approved', true)
            ->where('voided', false)
            ->sum('transaction_amount');

        $incoming = (float) Payment::where('to_bank_account_id', $account->id)
            ->where('approved', true)
            ->where('voided', false)
            ->sum('transaction_amount');

        return round((float) $account->initial_balance + $deposits - $outgoing + $incoming, 2);
    }
}
