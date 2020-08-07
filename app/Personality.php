<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Personality extends Model
{
    //
    protected $directory = '/personalities/';

    protected $fillable = [
        'name', 'ref', 'photo', 'title_id'
    ];

    public function title()
    {
        return $this->belongsTo('App\Title');
    }

    public function getPhotoAttribute($value)
    {
        return $this->directory . $value;
    }
}
