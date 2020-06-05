<?php

namespace App\Events;

use App\Request;
use Carbon\Carbon;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Dashboard implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $blocksData;
    public $requests;
    public $requestChart;

    public function __construct()
    {
        $totalRequests = count(Request::all());
        $pendingRequests = count(Request::whereStatus(0)->orWhere('status', 1)->get());
        $resolvedRequests = count(Request::whereStatus(3)->get());
        $accomplishedRate = $totalRequests === 0 ? 0 : round($resolvedRequests * 100 / $totalRequests);

        $blocksData = [
            'totalRequests' => $totalRequests,
            'pendingRequests' => $pendingRequests,
            'resolvedRequests' => $resolvedRequests,
            'accomplishedRate' => $accomplishedRate,
        ];

        $requests = [];
        foreach (Request::latest()->limit(5)->get() as $request) {
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
                foreach (Request::whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $appRequest) {
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
                foreach (Request::whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $appRequest) {
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

        $this->blocksData = $blocksData;
        $this->requests = $requests;
        $this->requestChart = $requestChart;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
