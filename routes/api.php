<?php

use App\Events\Dashboard;
use App\Events\RequestWithMessages;
use App\Http\Controllers\UtilController;
use App\Mail\VerificationCode;
use App\Personality;
use App\Request as AppRequest;
use App\User;
use buibr\Budget\BudgetSMS;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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

Route::namespace('Frontend')->prefix('frontend')->name('frontend.')->group(function () {
    Route::prefix('personality')->name('personality.')->group(function () {
        Route::post('', 'PersonalityController@store')->name('store');
        Route::get('', 'PersonalityController@index')->name('index');
    });

    Route::prefix('request')->name('request.')->group(function () {
        Route::post('check', 'RequestController@check')->name('check');
        Route::post('', 'RequestController@store')->name('store');
        Route::get('', 'RequestController@index')->name('index');
    });

    Route::prefix('chat')->name('chat.')->group(function () {
        Route::get('check', 'ChatController@check')->name('check');
        Route::post('message', 'ChatController@message')->name('message');
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
        Route::patch('{id}/status', 'RequestsController@status')->name('status');
        Route::post('{id}/delete', 'RequestsController@delete')->name('delete');
        Route::post('{id}', 'RequestsController@update')->name('update');
        Route::get('cancelled', 'RequestsController@cancelled')->name('cancelled');
        Route::get('solved', 'RequestsController@solved')->name('solved');
        Route::get('processing', 'RequestsController@processing')->name('processing');
        Route::get('pending', 'RequestsController@pending')->name('pending');
        Route::get('dev', 'RequestsController@dev')->name('dev');
        Route::get('important', 'RequestsController@important')->name('important');
        Route::get('attention', 'RequestsController@attention')->name('attention');
        Route::get('', 'RequestsController@index')->name('index');
    });

    Route::prefix('personalities')->name('personalities.')->group(function () {
        Route::post('{id}/delete', 'PersonalitiesController@delete')->name('delete');
        Route::post('{id}', 'PersonalitiesController@update')->name('update');
        Route::get('', 'PersonalitiesController@index')->name('index');
    });

    Route::prefix('chat')->name('chat.')->group(function () {
        Route::post('message', 'ChatController@message')->name('message');
        Route::name('requests.')->prefix('requests')->group(function () {
            Route::get('{id}', 'ChatController@show')->name('show');
            Route::get('', 'ChatController@index')->name('index');
        });
    });
});

Route::name('export.')->prefix('export')->group(function () {
    Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
    Route::name('csv')->post('csv', 'ExportController@csv');
    Route::name('pdf')->post('pdf', 'ExportController@pdf');
});

Route::post('test', function (Request $request) {
    $file = $request->file('file');

    $name = $file->getClientOriginalName();
    $type = $file->getClientOriginalExtension();
    $size = $file->getSize();
    $path = $file->getRealPath();
    $dimensions = getimagesize($path);

    // $max_size = 300 * 1024;
    $destinationPath = public_path('/test');
    $destination = time() . ' - ' . $name;

    // if ($size > $max_size) {
    //     $percentage = round($max_size * 100 / $size);

    //     $img = Image::make($path);
    //     $img->save($destinationPath . '/' . $destination, $percentage);
    // }

    $maxHeight = 640;
    $maxWidth = 640;

    $actualHeight = $dimensions[1];
    $actualWidth = $dimensions[0];

    $imgRatio = $actualWidth / $actualHeight;
    $maxRatio = $maxWidth / $maxHeight;
    $compressionQuality  = 0.6;

    if ($actualHeight > $maxHeight || $actualWidth > $maxWidth) {
        if ($imgRatio < $maxRatio) {
            //adjust width according to maxHeight
            $imgRatio = $maxHeight / $actualHeight;
            $actualWidth = $imgRatio * $actualWidth;
            $actualHeight = $maxHeight;
        } else if ($imgRatio > $maxRatio) {
            //adjust height according to maxWidth
            $imgRatio = $maxWidth / $actualWidth;
            $actualHeight = $imgRatio * $actualHeight;
            $actualWidth = $maxWidth;
        } else {
            $actualHeight = $maxHeight;
            $actualWidth = $maxWidth;
            $compressionQuality = 1;
        }
    }

    $img = Image::make($path);
    $img
        ->resize($actualWidth, $actualHeight)
        ->encode('jpg', $compressionQuality * 100)
        ->save($destinationPath . '/' . $destination);

    // $location = storage_path('/app/' . $file->store('test'));
    // $image = null;
    // switch ($type) {
    //     case 'png':
    //         $image = imagecreatefrompng($location);
    //         break;

    //     case 'jpg':
    //         $image = imagecreatefromjpeg($location);
    //         break;

    //     case 'jpeg':
    //         $image = imagecreatefromjpeg($location);
    //         break;
    // }
    // imagepng($image, ('../test/' . time() . '.png'));
    // imagedestroy($image);

    // $headers = array(
    //     'Content-Type' => 'image/png'
    // );

    // respond with the image then delete it
    // return response()->file($location, $headers)->deleteFileAfterSend(true);

    return [
        'name' => $name,
        'type' => $type,
        'size' => $size,
        'newsize' => $img->filesize(),
    ];
})->middleware('optimizeImages');

Route::get('view', function () {
    return view('test');
});
