<?php

namespace App\Http\Controllers\Frontend;

use App\Events\Dashboard;
use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Issue;
use App\Mail\RequestSubmitted;
use App\Platform;
use App\Request as AppRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use hisorange\BrowserDetect\Parser as Browser;
use Illuminate\Support\Facades\Crypt;

class RequestController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'platforms' => Platform::all(),
            'issues' => Issue::all(),
            'refs' => array_map(function ($item) {
                $documents = [];
                foreach ($item['documents'] as $document) {
                    $parts = explode('.', strtolower($document));
                    if (end($parts) === 'pdf') $documents[] = ['type' => 'application/pdf'];
                    else $documents[] = ['type' => 'image'];
                }
                return [
                    'ref' => $item['ref'],
                    'documents' => $documents,
                    'hash' => Crypt::encrypt($item['documents']),
                ];
            }, AppRequest::whereApproved(1)->get()->toArray()),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'platform_id' => 'required|numeric',
            'email' => 'required|email',
            'country' => 'required',
            'code' => 'required',
            'phone' => 'required',
            'issue_id' => 'required|numeric',
            'description' => 'required|string',
            'terms' => 'accepted',
        ]);

        if (($request->documents && count($request->documents)) < 3 && !$request->hash) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'You have not uploaded all of the required documents.'
            ]
        ]);

        $check = Crypt::decrypt($request->hash);

        $documents = [];
        $issue_files = [];

        $requestDocuments = $request->documents ? $request->documents : [];
        $requestIssueFiles = $request->issue_files ? $request->issue_files : [];
        $reqid = AppRequest::reqid();
        foreach ($requestDocuments as $document) {
            $name = $reqid . ' - ' . $document->getClientOriginalName();
            $document->move('requests', $name);
            $documents[] = htmlspecialchars($name);
        }
        foreach ($requestIssueFiles as $issue_file) {
            $name = $reqid . ' - ' . $document->getClientOriginalName();
            $issue_file->move('requests', $name);
            $issue_files[] = htmlspecialchars($name);
        }

        if (count($documents) === 0) $documents = array_map(function ($item) {
            $parts = explode('/', $item);
            return end($parts);
        }, AppRequest::whereRef($request->ref)->first()->documents);

        $name = ucwords(strtolower($request->name));
        $appRequest = AppRequest::create(array_merge($request->except(['documents', 'issue_files', 'code', 'name', 'phone']), [
            'name' => $name,
            'reqid' => $reqid,
            'phone' => $request->code . $request->phone,
            'documents' => json_encode($documents),
            'issue_files' => json_encode($issue_files),
            'client_id' => $request->ip(),
            'client_browser' => Browser::browserName()
        ]));

        Mail::to($request->email)->send(new RequestSubmitted($appRequest));

        event(new Requests());
        event(new Dashboard());

        return response()->json([
            'reqid' => $reqid,
            'email' => $request->email,
            'name' => $name
        ]);
    }

    public function check(Request $request)
    {
        $request->validate([
            'reqid' => 'required|exists:requests'
        ]);

        $appRequest = AppRequest::whereReqid($request->reqid)->first();

        return response()->json([
            'request' => array_merge($appRequest->toArray(), [
                'platform' => $appRequest->platform,
                'issue' => $appRequest->issue,
            ]),
        ]);
    }
}
