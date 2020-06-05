<?php

namespace App\Events;

use App\Request;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Requests implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $pending;
    public $processing;
    public $cancelled;
    public $solved;
    public $important;
    public $total;

    public function __construct()
    {
        $pending = count(Request::whereStatus(0)->get());
        $processing = count(Request::whereStatus(1)->get());
        $cancelled = count(Request::whereStatus(2)->get());
        $solved = count(Request::whereStatus(3)->get());
        $important = count(Request::whereTypeId(1)->get());
        $total = count(Request::get());

        $this->pending = $pending;
        $this->processing = $processing;
        $this->cancelled = $cancelled;
        $this->solved = $solved;
        $this->important = $important;
        $this->total = $total;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
