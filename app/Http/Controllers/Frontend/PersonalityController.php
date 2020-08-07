<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Personality;
use App\Title;
use Illuminate\Http\Request;

class PersonalityController extends Controller
{
    //
    public function index()
    {
        return response()->json([
            'titles' => Title::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'ref' => 'required|string|unique:personalities',
            'photo' => 'required|image',
            'title_id' => 'required|exists:titles,id',
        ]);

        $photo = $request->file('photo');
        $name = $photo->getClientOriginalName();
        $photo->move('personalities', $name);
        $photo = htmlspecialchars($name);

        Personality::create(array_merge($request->except('photo'), [
            'photo' => $photo,
        ]));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Your information have been successfully submitted.'
            ]
        ]);
    }
}
