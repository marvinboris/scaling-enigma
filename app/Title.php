<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    //
    protected $fillable = [
        'name',
    ];

    public function personalities()
    {
        return $this->hasMany('App\Personality');
    }
}
