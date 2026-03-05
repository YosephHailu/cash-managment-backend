<?php

namespace App\Http\Controllers;

use App\Exports\DepositExport;
use App\Exports\PaymentExport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }

    public function export(Request $request)
    {
        return Excel::download(new PaymentExport, 'invoices.xlsx');
    }

    public function exportDeposits(Request $request)
    {
        return Excel::download(new DepositExport, 'deposits.xlsx');
    }

}
