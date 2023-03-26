<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

    function rec_insert_to_collection($string) {
        $separated_file = explode('.', $string);
        if(count($separated_file) == 1) {
            $result = explode('=', $string);
            return collect([$result[0] => $result[1]]);
        }

        $key = $separated_file[0];
        unset($separated_file[0]);

        return collect([$key => $this->rec_insert_to_collection(implode('.', $separated_file))]);

    }
    
}
