<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Mail\VerificationCode;
use App\Request as AppRequest;
use App\User;
use buibr\Budget\BudgetSMS;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;


class ChatController extends Controller
{
    public function reqid(Request $request)
    {
        $input = $request->validate([
            'reqid' => 'required|exists:requests',
        ]);
        $appRequest = AppRequest::where('reqid', $input['reqid'])->first();

        if ($appRequest) {
            $code = User::generateNewRef();
            if ($request->otp === 'sms') {
                $budget = new BudgetSMS([
                    'username' => env('BUDGET_USERNAME'),
                    'userid' => env('BUDGET_USER_ID'),
                    'handle' => env('BUDGET_HANDLE'),
                    'from' => env('APP_NAME'),
                ]);

                $budget->send('+' . $appRequest->phone, 'Your Request Code is ' . $code);
            } else if ($request->otp === 'email') Mail::to($appRequest->email)->send(new VerificationCode($code));
            $hash = Crypt::encryptString(json_encode([
                'id' => $appRequest->id,
                'code' => $code,
            ]));
            return response()->json([
                'hash' => $hash
            ]);
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
        $appRequest = AppRequest::findOrFail($data->id);

        $code = AppRequest::generateNewRef();
        Mail::to($appRequest->email)->send(new VerificationCode($code));
        // $budget = new BudgetSMS([
        //     'username' => env('BUDGET_USERNAME'),
        //     'userid' => env('BUDGET_USER_ID'),
        //     'handle' => env('BUDGET_HANDLE'),
        //     'from' => env('APP_NAME'),
        // ]);

        // $budget->send('+' . $appRequest->phone, 'Your verification code is ' . $code);
        $hash = Crypt::encryptString(json_encode([
            'id' => $appRequest->id,
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
            $appRequest = AppRequest::findOrFail($data->id);

            $messages = [];
            $messages[] = $appRequest->description;
            if ($appRequest->comments) $messages[] = $appRequest->comments;

            $expires_at = Carbon::now()->addHours(6)->toDateTimeString();

            return response()->json([
                'token' => Crypt::encryptString(json_encode([
                    'reqid' => $appRequest->reqid,
                    'expires_at' => $expires_at,
                ])),
                'expires_at' => $expires_at,
                'messages' => $messages,
            ]);
        }

        return response()->json([
            'message' => 'Verification code is invalid.'
        ], 403);
    }

    public function check(Request $request)
    {
        $data = json_decode(Crypt::decryptString($request->token));
        $appRequest = AppRequest::whereReqid($data->reqid)->first();

        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Not existing request'
            ]
        ]);

        if (Carbon::parse($data->expires_at)->timestamp < time()) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Token expired'
            ]
        ]);

        $messages = [];
        $messages[] = [
            'created_at' => $appRequest->created_at,
            'content' => $appRequest->description,
            'from' => 'client'
        ];
        if ($appRequest->comments) $messages[] = [
            'created_at' => $appRequest->updated_at,
            'content' => $appRequest->comments,
            'from' => $appRequest->edited_by
        ];

        return response()->json([
            'token' => $request->token,
            'messages' => $messages
        ]);
    }
}
