<?php

namespace App\Http\Controllers\User;

use App\Events\Dashboard;
use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
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
        $requests = [];
        $filteredRequests = [];
        switch ($status) {
            case 'pending':
                $filteredRequests = AppRequest::whereStatus(0)->whereNull('type_id')->get();
                break;
            case 'processing':
                $filteredRequests = AppRequest::whereStatus(1)->whereNull('type_id')->get();
                break;
            case 'solved':
                $filteredRequests = AppRequest::whereStatus(3)->get();
                break;
            case 'cancelled':
                $filteredRequests = AppRequest::whereStatus(2)->get();
                break;
            case 'important':
                $type_id = Type::whereAbbr('CEO')->first()->id;
                foreach (AppRequest::whereTypeId($type_id)->get() as $filteredRequest) {
                    if (in_array($filteredRequest->status, [0, 1])) $filteredRequests[] = $filteredRequest;
                }
                break;
            case 'dev':
                $type_id = Type::whereAbbr('DEV')->first()->id;
                foreach (AppRequest::whereTypeId($type_id)->get() as $filteredRequest) {
                    if (in_array($filteredRequest->status, [0, 1])) $filteredRequests[] = $filteredRequest;
                }
                break;
            case 'dashboard':
                $filteredRequests = AppRequest::latest()->limit(5)->get();
                break;
            default:
                $filteredRequests = AppRequest::get();
                break;
        }
        foreach ($filteredRequests as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
                'external' => bin2hex($request->reqid)
            ]);
        }

        return $requests;
    }


    public function index()
    {
        $requests = $this->requests();
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function important()
    {
        $requests = $this->requests('important');
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function dev()
    {
        $requests = $this->requests('dev');
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function pending()
    {
        $requests = $this->requests('pending');
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function processing()
    {
        $requests = $this->requests('processing');
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function solved()
    {
        $requests = $this->requests('solved');
        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'types' => $types,
        ]);
    }

    public function cancelled()
    {
        $requests = $this->requests('cancelled');
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

        $requests = $this->requests($request->page_status);

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

        $requests = $this->requests($request->page_status);

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

        $requests = $this->requests($request->page_status);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => $requests,
        ]);
    }
}
