<?php

namespace App\Http\Controllers\User;

use App\Events\Dashboard;
use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Mail\RequestStatus;
use App\Request as AppRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use hisorange\BrowserDetect\Parser as Browser;

class RequestsController extends Controller
{
    //
    public function index()
    {
        $requests = [];
        foreach (AppRequest::all() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }

        return response()->json([
            'requests' => $requests
        ]);
    }

    public function important()
    {
        $requests = [];
        foreach (AppRequest::whereTypeId(1)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
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
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
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
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
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
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
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

        $admin_files = [];
        $requestAdminFiles = $request->admin_files ? $request->admin_files : [];
        foreach ($requestAdminFiles as $admin_file) {
            $name = $appRequest->reqid . ' - ' . $admin_file->getClientOriginalName();
            $admin_file->move('requests', $name);
            $admin_files[] = htmlspecialchars($name);
        }
        $appRequest->update(array_merge($request->only(['status', 'comments']), [
            'admin_files' => $admin_files,
            'edited_by' => $request->user()->email,
            'user_ip' => $request->ip(),
            'user_browser' => Browser::browserName(),
        ]));

        Mail::to($appRequest->email)->send(new RequestStatus($appRequest));

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
            case 'important':
                $filteredRequests = AppRequest::whereType(1)->get();
                break;
            case 'dashboard':
                $filteredRequests = AppRequest::latest()->limit(5)->get();
                break;
            case 'report':
                $filteredRequests = AppRequest::get();
                break;
        }

        foreach ($filteredRequests as $filteredRequest) {
            $requests[] = array_merge($filteredRequest->toArray(), [
                'platform' => $filteredRequest->platform->name,
                'issue' => $filteredRequest->issue->name,
            ]);
        }

        event(new Requests());
        event(new Dashboard());

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
                'platform' => $filteredRequest->platform->name,
                'issue' => $filteredRequest->issue->name,
            ]);
        }

        event(new Requests());
        event(new Dashboard());

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => $requests,
        ]);
    }

    public function status(Request $request, $id)
    {
        $appRequest = AppRequest::find($id);
        if (!$appRequest) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Request does not exist.'
            ]
        ]);

        $appRequest->update(['approved' => $appRequest->approved === 0 ? 1 : 0]);

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
                'platform' => $filteredRequest->platform->name,
                'issue' => $filteredRequest->issue->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => $requests,
        ]);
    }
}
