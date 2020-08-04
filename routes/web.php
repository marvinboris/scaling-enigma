<?php

use App\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Route;

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

Route::get('request/details/{hex}', function ($hex) {
    $reqid = hex2bin($hex);

    $request = Request::whereReqid($reqid)->first();

    $request = array_merge($request->toArray(), [
        'platform' => $request->platform->name,
        'issue' => $request->issue->name,
    ]);

    return view('details', [
        'request' => $request
    ]);
});

Route::view('{any}', 'index')->where('any', '^(?!api).*$');
