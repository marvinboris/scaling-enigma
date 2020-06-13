<?php

namespace App\Events;

use App\Message;
use App\Request;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class RequestWithMessages implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $id;
    public $message;

    public function __construct($id, $message)
    {
        $this->id = $id;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
