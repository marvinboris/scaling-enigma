<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('requests', function (Blueprint $table) {
            $table->integer('type_id')->unsigned()->index()->nullable();
            $table->string('edited_by')->nullable();
            $table->string('client_ip')->nullable();
            $table->string('client_mac')->nullable();
            $table->string('client_browser')->nullable();
            $table->string('user_ip')->nullable();
            $table->string('user_mac')->nullable();
            $table->string('user_browser')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('requests', function (Blueprint $table) {
            //
        });
    }
}
