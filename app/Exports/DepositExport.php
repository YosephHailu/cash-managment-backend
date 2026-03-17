<?php

namespace App\Exports;

use App\Models\Deposit;
use Carbon\Carbon;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromView;

class DepositExport implements FromView
{
    public function __construct(
        private Request $request
    ) {}

    public function view(): View
    {
        $query = Deposit::with('bankAccount');

        if ($this->request->boolean('export_all')) {
            $deposits = $query->get();
        } else {
            $dateFrom = $this->request->input('date_from');
            $dateTo = $this->request->input('date_to');
            if ($dateFrom && $dateTo) {
                $query->whereBetween('transaction_date', [
                    Carbon::parse($dateFrom)->startOfDay(),
                    Carbon::parse($dateTo)->endOfDay(),
                ]);
            }
            $deposits = $query->get();
        }

        return view('exports.deposit', [
            'deposits' => $deposits
        ]);
    }
}
