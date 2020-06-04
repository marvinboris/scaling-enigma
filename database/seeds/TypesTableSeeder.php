<?php

use App\Type;
use Illuminate\Database\Seeder;

class TypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $types = [
            ['name' => 'Important', 'abbr' => 'IM'],
            ['name' => 'Customer Service', 'abbr' => 'CS'],
            ['name' => 'Limarket', 'abbr' => 'LI'],
            ['name' => 'Payment', 'abbr' => 'PA'],
        ];

        foreach ($types as $type) {
            Type::create($type);
        }
    }
}
