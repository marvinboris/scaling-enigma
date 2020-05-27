<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Request as AppRequest;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index()
    {
        $totalRequests = count(AppRequest::all());
        $pendingRequests = count(AppRequest::whereStatus(0)->orWhere('status', 1)->get());
        $resolvedRequests = count(AppRequest::whereStatus(3)->get());
        $accomplishedRate = $totalRequests === 0 ? 0 : round($resolvedRequests * 100 / $totalRequests);

        $requests = [];
        foreach (AppRequest::latest()->limit(5)->get() as $request) {
            $requests[] = array_merge($request->toArray(), [
                'platform' => $request->platform
            ]);
        }

        return response()->json([
            'blocksData' => [
                'totalRequests' => $totalRequests,
                'pendingRequests' => $pendingRequests,
                'resolvedRequests' => $resolvedRequests,
                'accomplishedRate' => $accomplishedRate,
            ],
            'requests' => $requests
        ]);
    }
}
