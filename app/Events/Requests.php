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
    public $customer_service;
    public $limarket;
    public $important;
    public $attention;
    public $total;

    public function __construct()
    {
        $dev_type_id = Type::whereAbbr('DEV')->first()->id;
        $customer_service_type_id = Type::whereAbbr('CS')->first()->id;
        $limarket_type_id = Type::whereAbbr('LI')->first()->id;
        $at_type_id = Type::whereAbbr('AT')->first()->id;

        $pending = Request::whereStatus(0)->whereNull('type_id')->count();
        $processing = Request::whereStatus(1)->whereNull('type_id')->count();
        $dev = Request::whereTypeId($dev_type_id)->whereIn('status', [0, 1])->count();
        $customer_service = Request::whereTypeId($customer_service_type_id)->whereIn('status', [0, 1])->count();
        $limarket = Request::whereTypeId($limarket_type_id)->whereIn('status', [0, 1])->count();
        $important = Request::whereTypeId(1)->whereIn('status', [0, 1])->count();
        $attention = Request::whereTypeId($at_type_id)->whereIn('status', [0, 1])->count();
        $total = Request::count();

        $this->pending = $pending;
        $this->processing = $processing;
        $this->dev = $dev;
        $this->customer_service = $customer_service;
        $this->limarket = $limarket;
        $this->important = $important;
        $this->attention = $attention;
        $this->total = $total;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
