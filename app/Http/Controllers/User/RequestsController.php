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
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $requests = [];
        $filteredRequests = [];
        switch ($status) {
            case 'pending':
                $filteredRequests = AppRequest::whereStatus(0)->whereNull('type_id');
                break;
            case 'processing':
                $filteredRequests = AppRequest::whereStatus(1)->whereNull('type_id');
                break;
            case 'solved':
                $filteredRequests = AppRequest::whereStatus(3);
                break;
            case 'cancelled':
                $filteredRequests = AppRequest::whereStatus(2);
                break;
            case 'attention':
                $type_id = Type::whereAbbr('AT')->first()->id;
                $filteredRequests = AppRequest::whereTypeId($type_id)->whereIn('status', [0, 1]);
                break;
            case 'important':
                $type_id = Type::whereAbbr('CEO')->first()->id;
                $filteredRequests = AppRequest::whereTypeId($type_id)->whereIn('status', [0, 1]);
                break;
            case 'dev':
                $type_id = Type::whereAbbr('DEV')->first()->id;
                $filteredRequests = AppRequest::whereTypeId($type_id)->whereIn('status', [0, 1]);
                break;
            case 'dashboard':
                $filteredRequests = AppRequest::latest()->limit(5)->get();
                break;
            default:
                $filteredRequests = AppRequest::whereBetween('status', [0, 3]);
                break;
        }

        if ($status !== 'dashboard') {
            $filteredRequests = $filteredRequests->when($search, function ($query, $search) {
                if ($search !== "")
                    $query->where('name', 'LIKE', "%$search%")
                        ->orWhere('reqid', 'LIKE', "%$search%")
                        ->orWhere('phone', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('ref', 'LIKE', "%$search%")
                        ->orWhere('description', 'LIKE', "%$search%")
                        ->orWhere('comments', 'LIKE', "%$search%");
            });

            if ($show !== 'All') $filteredRequests = $filteredRequests->skip(($page - 1) * $show)->take($show);

            $total = $filteredRequests->count();
            $filteredRequests = $filteredRequests->get();
        }

        foreach ($filteredRequests as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform->name,
                'issue' => $request->issue->name,
                'external' => bin2hex($request->reqid)
            ]);
        }

        return [
            'requests' => $requests,
            'total' => $total,
        ];
    }


    public function index()
    {
        $data = $this->requests();

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
            'info' => 'index'
        ]);
    }

    public function important()
    {
        $data = $this->requests('important');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function attention()
    {
        $data = $this->requests('attention');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function dev()
    {
        $data = $this->requests('dev');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function pending()
    {
        $data = $this->requests('pending');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function processing()
    {
        $data = $this->requests('processing');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function solved()
    {
        $data = $this->requests('solved');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
            'types' => $types,
        ]);
    }

    public function cancelled()
    {
        $data = $this->requests('cancelled');

        $requests = $data['requests'];
        $total = $data['total'];

        $types = Type::all();

        return response()->json([
            'requests' => $requests,
            'total' => $total,
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

        $data = $this->requests($request->page_status);

        $requests = $data['requests'];
        $total = $data['total'];

        event(new Dashboard());
        event(new Requests());

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated request.'
            ],
            'requests' => $requests,
            'total' => $total,
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

        $data = $this->requests($request->page_status);

        $requests = $data['requests'];
        $total = $data['total'];

        event(new Requests());
        event(new Dashboard());

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => $requests,
            'total' => $total,
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

        $data = $this->requests($request->page_status);

        $requests = $data['requests'];
        $total = $data['total'];

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted request.'
            ],
            'requests' => $requests,
            'total' => $total,
        ]);
    }
}
