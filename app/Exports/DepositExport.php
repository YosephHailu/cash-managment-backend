<?php

namespace App\Exports;

use App\Models\Deposit;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class DepositExport implements FromView
{
    public function view(): View
    {
        return view('exports.deposit', [
            'deposits' => Deposit::all()
        ]);
    }
}
