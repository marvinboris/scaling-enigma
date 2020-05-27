<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    //
    protected $fillable = [
        'reqid', 'name', 'platform_id', 'country', 'phone', 'email', 'ref', 'documents', 'issue_id', 'issue_files', 'description', 'status'
    ];

    public function platform()
    {
        return $this->belongsTo('App\Platform');
    }

    public function issue()
    {
        return $this->belongsTo('App\Issue');
    }

    public function getDocumentsAttribute($value)
    {
        return json_decode($value);
    }

    public function getIssueFilesAttribute($value)
    {
        return json_decode($value);
    }

    public function getNameAttribute($value)
    {
        return ucwords(strtolower($value));
    }

    public static function generateReqid()
    {
        $letters = range('A', 'Z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 5; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return Carbon::now()->isoFormat('YYYYMMDDHHmmss') . $code;
    }

    public static function reqid()
    {
        $reqid = self::generateReqid();
        $request = self::where('reqid', $reqid)->first();
        while ($request) {
            $reqid = self::generateReqid();
            $request = self::where('reqid', $reqid)->first();
        }

        return $reqid;
    }
}
