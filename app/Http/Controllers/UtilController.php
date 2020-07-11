<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Http\Request;

class UtilController extends Controller
{
    public static function resize($file, $reqid)
    {
        $name = $file->getClientOriginalName();
        $path = $file->getRealPath();
        $dimensions = getimagesize($path);

        $destinationPath = public_path('/requests');
        $destination = $reqid . ' - ' . $name;

        $maxHeight = 640;
        $maxWidth = 640;

        $actualHeight = $dimensions[1];
        $actualWidth = $dimensions[0];

        $imgRatio = $actualWidth / $actualHeight;
        $maxRatio = $maxWidth / $maxHeight;
        $compressionQuality  = 0.6;

        if ($actualHeight > $maxHeight || $actualWidth > $maxWidth) {
            if ($imgRatio < $maxRatio) {
                //adjust width according to maxHeight
                $imgRatio = $maxHeight / $actualHeight;
                $actualWidth = $imgRatio * $actualWidth;
                $actualHeight = $maxHeight;
            } else if ($imgRatio > $maxRatio) {
                //adjust height according to maxWidth
                $imgRatio = $maxWidth / $actualWidth;
                $actualHeight = $imgRatio * $actualHeight;
                $actualWidth = $maxWidth;
            } else {
                $actualHeight = $maxHeight;
                $actualWidth = $maxWidth;
                $compressionQuality = 1;
            }
        }

        $img = Image::make($path);
        $img
            ->resize($actualWidth, $actualHeight)
            ->save($destinationPath . '/' . $destination, $compressionQuality * 100);
    }
}
