<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Request as AppRequest;
use Illuminate\Http\Request;

class RequestsController extends Controller
{
    //
    public function index()
    {
        $requests = [];
        foreach (AppRequest::all() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform,
                'issue' => $request->issue,
            ]);
        }

        return response()->json([
            'requests' => $requests
        ]);
    }

    public function pending()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(0)->orWhere('status', 1)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform,
                'issue' => $request->issue,
            ]);
        }

        return response()->json([
            'requests' => $requests
        ]);
    }

    public function solved()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(3)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform,
                'issue' => $request->issue,
            ]);
        }

        return response()->json([
            'requests' => $requests
        ]);
    }

    public function cancelled()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(2)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform,
                'issue' => $request->issue,
            ]);
        }

        return response()->json([
            'requests' => $requests
        ]);
    }

    public function update(Request $request, $id)
    {
        $appRequest = AppRequest::find($id);
        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Request does not exist.'
            ]
        ]);

        $requests = [];
        $filteredRequests = null;
        switch ($request->page_status) {
            case 'pending':
                $filteredRequests = AppRequest::whereStatus(0)->orWhere('status', 1)->get();
                break;
            case 'solved':
                $filteredRequests = AppRequest::whereStatus(3)->get();
                break;
            case 'cancelled':
                $filteredRequests = AppRequest::whereStatus(2)->get();
                break;
        }

        foreach ($filteredRequests as $filteredRequest) {
            $requests[] = array_merge($filteredRequest->toArray(), [
                'platform' => $filteredRequest->platform,
                'issue' => $filteredRequest->issue,
            ]);
        }

        $appRequest->update($request->only(['admin_files', 'status', 'comments']));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated request.'
            ],
            'requests' => $requests
        ]);
    }

    public function delete(Request $request, $id)
    {
        $appRequest = AppRequest::find($id);
        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Request does not exist.'
            ]
        ]);

        $appRequest->delete();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => AppRequest::whereStatus($request->status)->get(),
        ]);
    }
}
