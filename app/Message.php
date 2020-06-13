<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
    protected $directory = '/requests/';

    protected $fillable = [
        'request_id', 'content', 'files', 'from'
    ];

    public function request()
    {
        return $this->belongsTo('App\Request');
    }

    public function getFilesAttribute($value)
    {
        $files = [];
        foreach (json_decode($value) as $file) {
            $files[] = $this->directory . $file;
        }
        return $files;
    }
}
