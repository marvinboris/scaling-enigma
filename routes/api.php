<?php

use App\Events\Dashboard;
use App\Mail\VerificationCode;
use App\Request as AppRequest;
use App\User;
use buibr\Budget\BudgetSMS;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Frontend')->prefix('frontend')->name('frontend.')->group(function () {
    Route::prefix('request')->name('request.')->group(function () {
        Route::post('check', 'RequestController@check')->name('check');
        Route::post('', 'RequestController@store')->name('store');
        Route::get('', 'RequestController@index')->name('index');
    });

    Route::prefix('chat')->name('chat.')->group(function () {
        Route::get('check', 'ChatController@check')->name('check');
        Route::post('verify', 'ChatController@verify')->name('verify');
        Route::post('reqid', 'ChatController@reqid')->name('reqid');
    });
});

Route::namespace('Auth')->prefix('auth')->name('auth.')->group(function () {
    Route::post('resend', 'AuthController@resend')->name('resend');
    Route::post('verify', 'AuthController@verify')->name('verify');
    Route::post('login', 'AuthController@login')->name('login');

    Route::middleware('auth:api')->group(function () {
        Route::get('logout', 'AuthController@logout')->name('logout');
        Route::get('user', 'AuthController@user')->name('user');
    });
});

Route::middleware('auth:api')->namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');

    Route::prefix('requests')->name('requests.')->group(function () {
        Route::post('{id}/delete', 'RequestsController@delete')->name('delete');
        Route::post('{id}', 'RequestsController@update')->name('update');
        Route::get('cancelled', 'RequestsController@cancelled')->name('cancelled');
        Route::get('solved', 'RequestsController@solved')->name('solved');
        Route::get('pending', 'RequestsController@pending')->name('pending');
        Route::get('important', 'RequestsController@important')->name('important');
        Route::get('', 'RequestsController@index')->name('index');
    });
});

Route::name('export.')->prefix('export')->group(function () {
    Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
    Route::name('csv')->post('csv', 'ExportController@csv');
    Route::name('pdf')->post('pdf', 'ExportController@pdf');
});

Route::get('test', function () {
    return request()->token;
});
