<?php

namespace App\Exports;

use App\Models\Payment;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;

class PaymentExport implements FromView
{
    public function view(): View
    {
        return view('exports.payment', [
            'payments' => Payment::all()
        ]);
    }
}