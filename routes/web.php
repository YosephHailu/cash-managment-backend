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

// Handle static assets first - let Laravel serve them directly
Route::get('/_nuxt/{file}', function ($file) {
    $path = public_path('_nuxt/' . $file);
    if (file_exists($path)) {
        return response()->file($path);
    }
    abort(404);
})->where('file', '.*');

// Catch-all route for SPA - must be last
Route::get('/{path?}', [PageController::class, 'index'])->where('path', '.*');
