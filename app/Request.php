<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    //
    protected $directory = '/requests/';

    protected $fillable = [
        'reqid', 'name', 'platform_id', 'country', 'phone', 'email', 'ref', 'documents', 'issue_id', 'issue_files', 'description', 'status', 'comments', 'admin_files', 'type_id', 'edited_by', 'client_ip', 'client_mac', 'client_browser', 'user_ip', 'user_mac', 'user_browser', 'approved', 'translate', 'hash', 'pack_ids'
    ];

    public function platform()
    {
        return $this->belongsTo('App\Platform');
    }

    public function issue()
    {
        return $this->belongsTo('App\Issue');
    }

    public function messages()
    {
        return $this->hasMany('App\Message');
    }

    public function getRefAttribute($value)
    {
        return $value ?? 'Unidentified';
    }

    public function getEditedByAttribute($value)
    {
        return $value ?? 'Unidentified';
    }

    public function getDocumentsAttribute($value)
    {
        $documents = [];
        foreach (json_decode($value) as $document) {
            $documents[] = $this->directory . $document;
        }
        return $documents;
    }

    public function getIssueFilesAttribute($value)
    {
        $issue_files = [];
        foreach (json_decode($value) as $issue_file) {
            $issue_files[] = $this->directory . $issue_file;
        }
        return $issue_files;
    }

    public function getAdminFilesAttribute($value)
    {
        $admin_files = [];
        $array = $value ? json_decode($value) : [];
        foreach ($array as $admin_file) {
            $admin_files[] = $this->directory . $admin_file;
        }
        return $admin_files;
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
