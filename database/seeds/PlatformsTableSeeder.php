<?php

use App\Platform;
use Illuminate\Database\Seeder;

class PlatformsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $platforms = [
            'Liyeplimal', 'Simbcoin', 'Limarket / DCA'
        ];

        foreach ($platforms as $platform) {
            Platform::create([
                'name' => $platform
            ]);
        }
    }
}
