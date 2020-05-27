<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'Boris Ndouma',
            'email' => 'jaris.ultio.21@gmail.com',
            'phone' => '237655588688',
            'password' => Hash::make('adminadmin'),
        ]);
    }
}
