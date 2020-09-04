<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Mail\VerificationCode;
use App\Request as AppRequest;
use App\Type;
use App\User;
use buibr\Budget\BudgetSMS;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use ReCaptcha\ReCaptcha;

class AuthController extends Controller
{
    //
    /**
     * This trait has all the login throttling functionality.
     */
    use ThrottlesLogins;

    /**
     * Login the user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function login(Request $request)
    {
        $input = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'g-recaptcha-response' => 'required',
        ]);

        $recaptcha = new ReCaptcha(env('GOOGLE_RECAPTCHA_SECRET_KEY'));
        $response = $recaptcha->setExpectedHostname(url())
            ->verify($request->input('g-recaptcha-response'));

        if (!$response->isSuccess()) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => implode('\n', $response->getErrorCodes()),
            ]
        ]);
        $user = User::where('email', $input['email'])->first();

        if ($user) {
            if (Hash::check($input['password'], $user->password)) {
                $code = User::generateNewRef();
                if ($request->otp === 'sms') {
                    $budget = new BudgetSMS([
                        'username' => env('BUDGET_USERNAME'),
                        'userid' => env('BUDGET_USER_ID'),
                        'handle' => env('BUDGET_HANDLE'),
                        'from' => env('APP_NAME'),
                    ]);

                    $budget->send('+' . $user->phone, 'Your User Login Code is ' . $code);
                } else if ($request->otp === 'email') Mail::to($user->email)->send(new VerificationCode($code));
                Artisan::call('display:code', [
                    'code' => $code,
                ]);
                $hash = Crypt::encryptString(json_encode([
                    'id' => $user->id,
                    'code' => $code,
                ]));
                return response()->json([
                    'hash' => $hash
                ]);
            }
        }
        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'These credentials do not match our records.'
            ]
        ], 403);
    }

    public function resend(Request $request)
    {
        $data = json_decode(Crypt::decryptString($request->hash));
        $user = User::findOrFail($data->id);

        $code = User::generateNewRef();
        Mail::to($user->email)->send(new VerificationCode($code));
        $budget = new BudgetSMS([
            'username' => env('BUDGET_USERNAME'),
            'userid' => env('BUDGET_USER_ID'),
            'handle' => env('BUDGET_HANDLE'),
            'from' => env('APP_NAME'),
        ]);

        $budget->send('+' . $user->phone, 'Your verification code is ' . $code);
        $hash = Crypt::encryptString(json_encode([
            'id' => $user->id,
            'code' => $code,
        ]));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Verification code successfully sent.'
            ],
            'hash' => $hash
        ]);
    }

    public function verify(Request $request)
    {
        $input = $request->validate([
            'code' => 'required|string'
        ]);

        $data = json_decode(Crypt::decryptString($request->hash));
        if ($input['code'] === $data->code) {
            $user = User::findOrFail($data->id);
            $tokenResult = $user->createToken('User Personal Access Token');
            $token = $tokenResult->token;
            $token->save();

            $dev_type_id = Type::whereAbbr('DEV')->first()->id;
            $ceo_type_id = Type::whereAbbr('CEO')->first()->id;

            $pending = count(AppRequest::whereStatus(0)->whereNull('type_id')->get());
            $processing = count(AppRequest::whereStatus(1)->whereNull('type_id')->get());
            $dev = 0;
            foreach (AppRequest::whereTypeId($dev_type_id)->get() as $request) {
                if (in_array($request->status, [0, 1])) $dev++;
            }

            $important = 0;
            foreach (AppRequest::whereTypeId($ceo_type_id)->get() as $request) {
                if (in_array($request->status, [0, 1])) $important++;
            }

            return response()->json([
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString(),
                'userData' => array_merge($user->toArray(), [
                    'notifications' => $user->unreadNotifications()->latest()->limit(5)->get(),
                    'pending' => $pending,
                    'processing' => $processing,
                    'dev' => $dev,
                    'important' => $important,
                ])
            ]);
        }

        return response()->json([
            'message' => 'Verification code is invalid.'
        ], 403);
    }

    public function user()
    {
        $user = request()->user();

        if (!$user) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'No token stored',
            ]
        ], 521);

        $dev_type_id = Type::whereAbbr('DEV')->first()->id;
        $ceo_type_id = Type::whereAbbr('CEO')->first()->id;

        $pending = count(AppRequest::whereStatus(0)->whereNull('type_id')->get());
        $processing = count(AppRequest::whereStatus(1)->whereNull('type_id')->get());
        $dev = 0;
        foreach (AppRequest::whereTypeId($dev_type_id)->get() as $request) {
            if (in_array($request->status, [0, 1])) $dev++;
        }

        $important = 0;
        foreach (AppRequest::whereTypeId($ceo_type_id)->get() as $request) {
            if (in_array($request->status, [0, 1])) $important++;
        }

        $data = array_merge($user->toArray(), [
            'notifications' => $user->unreadNotifications()->latest()->limit(5)->get(),
            'pending' => $pending,
            'processing' => $processing,
            'dev' => $dev,
            'important' => $important,
        ]);

        return response()->json([
            'data' => $data
        ]);
    }

    public function logout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out.'
        ]);
    }
}
