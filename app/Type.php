<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    //
    protected $fillable = [
        'name', 'abbr'
    ];

    public function requests()
    {
        return $this->belongsTo('App\Request');
    }
}
