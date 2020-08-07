<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Personality;
use App\Title;
use Illuminate\Http\Request;

class PersonalitiesController extends Controller
{
    //
    private $validation = [
        'name' => 'required|string',
        'photo' => 'required|image',
        'title_id' => 'required|exists:titles,id',
    ];

    private function personalities()
    {
        $personalities = [];

        foreach (Personality::all() as $personality) {
            $personalities[] = array_merge($personality->toArray(), [
                'title' => $personality->title->name,
            ]);
        }

        return $personalities;
    }

    public function index()
    {
        return response()->json([
            'personalities' => $this->personalities(),
            'titles' => Title::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->validation);

        $photo = $request->file('photo');
        $name = $photo->getClientOriginalName();
        $photo->move('personalities', $name);
        $photo = htmlspecialchars($name);

        Personality::create(array_merge($request->except('photo'), [
            'photo' => $photo,
        ]));

        return response()->json([
            'personalities' => $this->personalities(),
            'message' => [
                'type' => 'success',
                'content' => 'Personality has been successfully created.',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $personality = Personality::find($id);

        if (!$personality) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Personality does not exist.',
            ]
        ]);

        if ($photo = $request->file('photo')) {
            $name = $photo->getClientOriginalName();
            $photo->move('personalities', $name);
            $photo = htmlspecialchars($name);
        }

        $personality->update(array_merge($request->except('photo'), [
            'photo' => $photo,
        ]));

        return response()->json([
            'personalities' => $this->personalities(),
            'message' => [
                'type' => 'success',
                'content' => 'Personality has been successfully updated.',
            ]
        ]);
    }

    public function delete($id)
    {
        $personality = Personality::find($id);

        if (!$personality) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Personality does not exist.',
            ]
        ]);

        $personality->delete();

        return response()->json([
            'personalities' => $this->personalities(),
            'message' => [
                'type' => 'success',
                'content' => 'Personality has been successfully deleted.',
            ]
        ]);
    }
}
