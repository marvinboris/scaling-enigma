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
    public $solved;
    public $total;

    public function __construct($pending, $processing, $solved, $total)
    {
        $this->pending = $pending;
        $this->processing = $processing;
        $this->solved = $solved;
        $this->total = $total;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}