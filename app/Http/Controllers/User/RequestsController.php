<?php

namespace App\Http\Controllers\User;

use App\Events\Dashboard;
use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Mail\RequestStatus;
use App\Request as AppRequest;
use App\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use hisorange\BrowserDetect\Parser as Browser;

class RequestsController extends Controller
{
    //
    private function requests($status = '')
    {
        $filteredRequests = [];
        switch ($status) {
            case 'pending':
                $filteredRequests = AppRequest::whereStatus(0)->whereNull('type_id')->get();
                break;
            case 'processing':
                $filteredRequests = AppRequest::whereStatus(1)->whereNull('type_id')->get();
                break;
            case 'solved':
                $filteredRequests = AppRequest::whereStatus(3)->whereNull('type_id')->get();
                break;
            case 'cancelled':
                $filteredRequests = AppRequest::whereStatus(2)->whereNull('type_id')->get();
                break;
            case 'important':
                $type_id = Type::whereAbbr('CEO')->first()->id;
                $filteredRequests = AppRequest::whereType($type_id)->get();
                break;
            case 'dev':
                $type_id = Type::whereAbbr('DEV')->first()->id;
                $filteredRequests = AppRequest::whereType($type_id)->get();
                break;
            case 'dashboard':
                $filteredRequests = AppRequest::latest()->limit(5)->get();
                break;
            default:
                $filteredRequests = AppRequest::get();
                break;
        }

        return $filteredRequests;
    }


    public function index()
    {
        $requests = [];
        foreach (AppRequest::all() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function important()
    {
        $requests = [];
        $type_id = Type::whereAbbr('CEO')->first()->id;
        foreach (AppRequest::whereTypeId($type_id)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function dev()
    {
        $requests = [];
        $type_id = Type::whereAbbr('DEV')->first()->id;
        foreach (AppRequest::whereTypeId($type_id)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function pending()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(0)->whereNull('type_id')->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function processing()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(1)->whereNull('type_id')->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function solved()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(3)->whereNull('type_id')->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function cancelled()
    {
        $requests = [];
        foreach (AppRequest::whereStatus(2)->whereNull('type_id')->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
            ]);
        }
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
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

        if (!$request->has('type_id')) {
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
        } else {
            $appRequest->update($request->only(['type_id', 'translate']));
        }

        $requests = [];
        $filteredRequests = $this->requests($request->status);

        foreach ($filteredRequests as $filteredRequest) {
            $requests[] = array_merge($filteredRequest->toArray(), [
                'platform' => $filteredRequest->platform->name,
                'issue' => $filteredRequest->issue->name,
            ]);
        }

        event(new Dashboard());
        event(new Requests());

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
        $filteredRequests = $this->requests($request->status);

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
        $filteredRequests = $this->requests($request->status);

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
