<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Psy\Readline\Hoa\Console;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [PageController::class, 'index']);
Route::get('payment-export', [PageController::class, 'export']);

Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');

Route::get('/{path?}/{path?}', function () {
    return view('welcome');
});
