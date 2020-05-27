<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->string('reqid', 50)->unique();
            $table->string('name');
            $table->integer('platform_id')->unsigned()->index();
            $table->string('email');
            $table->string('ref')->nullable();
            $table->string('country');
            $table->string('phone');
            $table->text('documents')->nullable();
            $table->integer('issue_id')->unsigned()->index();
            $table->text('description')->nullable();
            $table->text('issue_files')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requests');
    }
}
