<?php

namespace App\Http\Controllers\User;

use App\Events\Requests;
use App\Http\Controllers\Controller;
use App\Request as AppRequest;
use Carbon\Carbon;
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
                'platform' => $request->platform->name
            ]);
        }

        $requestChart = [];
        $days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        $dayOfWeek = Carbon::today()->dayOfWeek;
        if ($dayOfWeek > 0) {
            for ($i = 1; $i <= $dayOfWeek; $i++) {
                $subDays = $dayOfWeek - $i;
                $pending = 0;
                $cancelled = 0;
                $solved = 0;
                foreach (AppRequest::whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $appRequest) {
                    switch ($appRequest->status) {
                        case 2:
                            $cancelled++;
                            break;
                        case 3:
                            $solved++;
                            break;
                        default:
                            $pending++;
                            break;
                    }
                }
                $requestChart[] = [
                    'name' => $days[$i],
                    'pending' => $pending,
                    'cancelled' => $cancelled,
                    'solved' => $solved,
                ];
            }

            for ($i = $dayOfWeek + 1; $i <= 7; $i++) {
                $day = $i;
                if ($i === 7) $day = 0;
                $requestChart[] = ['name' => $days[$day], 'pending' => 0, 'cancelled' => 0, 'solved' => 0];
            }
        } else {
            for ($i = 0; $i < 7; $i++) {
                $subDays = 6 - $i;
                $pending = 0;
                $cancelled = 0;
                $solved = 0;
                foreach (AppRequest::whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $appRequest) {
                    switch ($appRequest->status) {
                        case 2:
                            $cancelled++;
                            break;

                        case 3:
                            $solved++;
                            break;

                        default:
                            $pending++;
                            break;
                    }
                }
                $day = $i;
                if ($subDays === 0) $day = 0;
                $requestChart[] = [
                    'name' => $days[$day],
                    'pending' => $pending,
                    'cancelled' => $cancelled,
                    'solved' => $solved,
                ];
            }
        }

        return response()->json([
            'blocksData' => [
                'totalRequests' => $totalRequests,
                'pendingRequests' => $pendingRequests,
                'resolvedRequests' => $resolvedRequests,
                'accomplishedRate' => $accomplishedRate,
            ],
            'requests' => $requests,
            'requestChart' => $requestChart,
        ]);
    }
}
