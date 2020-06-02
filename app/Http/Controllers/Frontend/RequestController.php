<?php

namespace App\Http\Controllers\Frontend;

use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Issue;
use App\Mail\RequestSubmitted;
use App\Platform;
use App\Request as AppRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class RequestController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'platforms' => Platform::all(),
            'issues' => Issue::all(),
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

        $name = ucwords(strtolower($request->name));
        $appRequest = AppRequest::create(array_merge($request->except(['documents', 'issue_files', 'code', 'name', 'phone']), [
            'name' => $name,
            'reqid' => $reqid,
            'phone' => $request->code . $request->phone,
            'documents' => json_encode($documents),
            'issue_files' => json_encode($issue_files),
        ]));

        Mail::to($request->email)->send(new RequestSubmitted($appRequest));

        event(new Requests(
            count(AppRequest::whereStatus(0)->get()),
            count(AppRequest::whereStatus(1)->get()),
            count(AppRequest::whereStatus(3)->get())
        ));

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
