<?php

use App\Title;
use Illuminate\Database\Seeder;

class TitlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $titles = [
            'Platinum', 'Diamond', 'Coach'
        ];

        foreach ($titles as $title) {
            Title::create([
                'name' => $title
            ]);
        }
    }
}
