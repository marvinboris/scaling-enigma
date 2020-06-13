<?php

namespace App\Http\Controllers\User;

use App\Events\RequestWithMessages;
use App\Http\Controllers\Controller;
use App\Message;
use App\Request as AppRequest;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        $appRequest = AppRequest::whereReqid($request->reqid)->first();
        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Not existing request'
            ]
        ]);

        $files = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $name = $appRequest->reqid . ' - ' . $file->getClientOriginalName();
                $file->move('requests', $name);
                $files[] = htmlspecialchars($name);
            }
        }

        $message = Message::create([
            'request_id' => $appRequest->id,
            'content' => $request->body,
            'files' => json_encode($files),
            'from' => $request->user()->email
        ]);

        event(new RequestWithMessages($appRequest->id, $message));

        return response()->json([
            'id' => $appRequest->id,
            'message' => $message
        ]);
    }

    public function index()
    {
        $requests = AppRequest::latest()->get();

        $allRequests = [];
        foreach ($requests as $appRequest) {
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

            $allRequests[] = array_merge($appRequest->toArray(), [
                'messages' => array_merge($messages, Message::whereRequestId($appRequest->id)->get()->toArray())
            ]);
        }

        return response()->json([
            'requests' => $allRequests
        ]);
    }

    public function show($id)
    {
        $appRequest = AppRequest::find($id);
        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Not existing request'
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
            'messages' => array_merge($messages, Message::whereRequestId($appRequest->id)->get()->toArray())
        ]);
    }
}
