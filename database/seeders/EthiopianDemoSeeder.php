<?php

namespace Database\Seeders;

use App\Models\Bank;
use App\Models\BankAccount;
use App\Models\Deposit;
use App\Models\Payment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class EthiopianDemoSeeder extends Seeder
{
    /**
     * Seed Ethiopian demo-only sample data.
     */
    public function run(): void
    {
        $admin = User::first();

        $cbe = Bank::firstOrCreate(
            ['name' => 'Commercial Bank of Ethiopia'],
            ['description' => 'Demo bank seed for Ethiopian sample data.']
        );
        $awash = Bank::firstOrCreate(
            ['name' => 'Awash Bank'],
            ['description' => 'Demo bank seed for Ethiopian sample data.']
        );
        $dashen = Bank::firstOrCreate(
            ['name' => 'Dashen Bank'],
            ['description' => 'Demo bank seed for Ethiopian sample data.']
        );

        $accounts = [
            [
                'account_number' => '1000287654321',
                'bank_id' => $cbe->id,
                'branch' => 'Addis Ababa Main',
                'initial_balance' => 1200000,
                'blocked_amount' => 150000,
                'description' => 'Demo ETB operational account',
            ],
            [
                'account_number' => '3000456789012',
                'bank_id' => $awash->id,
                'branch' => 'Bole Branch',
                'initial_balance' => 850000,
                'blocked_amount' => 100000,
                'description' => 'Demo ETB project account',
            ],
            [
                'account_number' => '8000678901234',
                'bank_id' => $dashen->id,
                'branch' => 'Piassa Branch',
                'initial_balance' => 600000,
                'blocked_amount' => 75000,
                'description' => 'Demo ETB reserve account',
            ],
        ];

        $accountIds = [];
        foreach ($accounts as $accountData) {
            $account = BankAccount::updateOrCreate(
                ['account_number' => $accountData['account_number']],
                array_merge($accountData, ['balance' => $accountData['initial_balance']])
            );
            $accountIds[$accountData['account_number']] = $account->id;
        }

        $deposits = [
            [
                'reference_no' => 'DEP-ETH-1001',
                'bank_account_id' => $accountIds['1000287654321'],
                'transaction_date' => Carbon::now()->subDays(20)->toDateString(),
                'currency' => 'ETB',
                'transaction_amount' => 225000,
                'project' => 'Road Construction - Addis',
                'reason' => 'Government disbursement for stage-one materials',
                'check_type' => 'Check',
            ],
            [
                'reference_no' => 'DEP-ETH-1002',
                'bank_account_id' => $accountIds['3000456789012'],
                'transaction_date' => Carbon::now()->subDays(14)->toDateString(),
                'currency' => 'ETB',
                'transaction_amount' => 150000,
                'project' => 'School Supply Program',
                'reason' => 'Supplier reimbursement and budget top-up',
                'check_type' => 'bearer',
            ],
            [
                'reference_no' => 'DEP-ETH-1003',
                'bank_account_id' => $accountIds['8000678901234'],
                'transaction_date' => Carbon::now()->subDays(8)->toDateString(),
                'currency' => 'ETB',
                'transaction_amount' => 90000,
                'project' => 'Emergency Buffer',
                'reason' => 'Cash reserve top-up for urgent operations',
                'check_type' => 'Check',
            ],
        ];

        foreach ($deposits as $depositData) {
            Deposit::updateOrCreate(
                ['reference_no' => $depositData['reference_no']],
                $depositData
            );
        }

        $payments = [
            [
                'invoice_number' => 'DMO-ETB-0001',
                'bank_account_id' => $accountIds['1000287654321'],
                'to_bank_account_id' => null,
                'to' => 'Addis Build PLC',
                'transaction_amount' => 185000,
                'amount_in_words' => 'One hundred eighty five thousand birr',
                'reason' => 'Concrete and reinforcement payment',
                'project' => 'Road Construction - Addis',
                'transaction_date' => Carbon::now()->subDays(6)->toDateString(),
                'currency' => 'ETB',
                'payment_method' => 'RTGS',
                'cheque_number' => null,
                'checked' => true,
                'checked_at' => Carbon::now()->subDays(6)->toDateString(),
                'checked_by_id' => $admin?->id,
                'approved' => true,
                'approved_at' => Carbon::now()->subDays(6)->toDateString(),
                'approved_by_id' => $admin?->id,
                'voided' => false,
            ],
            [
                'invoice_number' => 'DMO-ETB-0002',
                'bank_account_id' => $accountIds['3000456789012'],
                'to_bank_account_id' => $accountIds['8000678901234'],
                'to' => 'Internal Transfer',
                'transaction_amount' => 110000,
                'amount_in_words' => 'One hundred ten thousand birr',
                'reason' => 'Transfer for reserve stabilization',
                'project' => 'Treasury Balancing',
                'transaction_date' => Carbon::now()->subDays(4)->toDateString(),
                'currency' => 'ETB',
                'payment_method' => 'Account To Account',
                'cheque_number' => null,
                'checked' => true,
                'checked_at' => Carbon::now()->subDays(4)->toDateString(),
                'checked_by_id' => $admin?->id,
                'approved' => true,
                'approved_at' => Carbon::now()->subDays(4)->toDateString(),
                'approved_by_id' => $admin?->id,
                'voided' => false,
            ],
            [
                'invoice_number' => 'DMO-ETB-0003',
                'bank_account_id' => $accountIds['1000287654321'],
                'to_bank_account_id' => null,
                'to' => 'Ethio Logistics Share Company',
                'transaction_amount' => 78000,
                'amount_in_words' => 'Seventy eight thousand birr',
                'reason' => 'Transport and handling charges',
                'project' => 'School Supply Program',
                'transaction_date' => Carbon::now()->subDays(2)->toDateString(),
                'currency' => 'ETB',
                'payment_method' => 'Check',
                'cheque_number' => 'CHK-540903',
                'checked' => true,
                'checked_at' => Carbon::now()->subDays(2)->toDateString(),
                'checked_by_id' => $admin?->id,
                'approved' => true,
                'approved_at' => Carbon::now()->subDays(2)->toDateString(),
                'approved_by_id' => $admin?->id,
                'voided' => false,
            ],
        ];

        foreach ($payments as $paymentData) {
            Payment::updateOrCreate(
                ['invoice_number' => $paymentData['invoice_number']],
                $paymentData
            );
        }

        // Keep seeded account balances consistent with approved/non-voided records.
        foreach ($accountIds as $accountId) {
            $account = BankAccount::find($accountId);
            if (!$account) {
                continue;
            }

            $totalDeposits = (float) Deposit::where('bank_account_id', $account->id)->sum('transaction_amount');
            $totalOutgoing = (float) Payment::where('bank_account_id', $account->id)
                ->where('approved', true)
                ->where('voided', false)
                ->sum('transaction_amount');
            $totalIncoming = (float) Payment::where('to_bank_account_id', $account->id)
                ->where('approved', true)
                ->where('voided', false)
                ->sum('transaction_amount');

            $account->balance = round(((float) $account->initial_balance) + $totalDeposits - $totalOutgoing + $totalIncoming, 2);
            $account->save();
        }
    }
}
