<?php

use App\Issue;
use Illuminate\Database\Seeder;

class IssuesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $issues = [
            'Account verification', 'Negative balance', 'Withdrawal', 'Information', 'Other'
        ];

        foreach ($issues as $issue) {
            Issue::create([
                'name' => $issue
            ]);
        }
    }
}
