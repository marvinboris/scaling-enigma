<?php

namespace App\Events;

use App\Request;
use App\Type;
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
    public $dev;
    public $important;
    public $total;

    public function __construct()
    {
        $dev_type_id = Type::whereAbbr('DEV')->first()->id;

        $pending = count(Request::whereStatus(0)->whereNull('type_id')->get());
        $processing = count(Request::whereStatus(1)->whereNull('type_id')->get());
        $dev = count(Request::whereTypeId($dev_type_id)->whereStatus(0)->orWhere('status', 1)->get());
        $important = count(Request::whereTypeId(1)->whereStatus(0)->orWhere('status', 1)->get());
        $total = count(Request::get());

        $this->pending = $pending;
        $this->processing = $processing;
        $this->dev = $dev;
        $this->important = $important;
        $this->total = $total;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
