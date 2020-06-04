<?php

namespace App\Events;

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

    public function __construct($pending, $processing, $cancelled, $solved, $important, $total)
    {
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
