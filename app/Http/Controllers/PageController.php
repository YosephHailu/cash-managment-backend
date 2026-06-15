<?php

namespace App\Http\Controllers;

use App\Exports\DepositExport;
use App\Exports\PaymentExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class PageController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function export(Request $request)
    {
        return Excel::download(new PaymentExport($request), 'payments.xlsx');
    }

    public function exportDeposits(Request $request)
    {
        return Excel::download(new DepositExport($request), 'deposits.xlsx');
    }
}
