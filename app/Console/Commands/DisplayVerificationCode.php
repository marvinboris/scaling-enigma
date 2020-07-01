<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DisplayVerificationCode extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'display:code {code}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command shows my admin verification code on login';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('This is your admin verification code : ' . $this->argument('code'));
    }
}
