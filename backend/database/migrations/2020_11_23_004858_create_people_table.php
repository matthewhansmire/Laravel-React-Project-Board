<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('password');            
            $table->string('photo')->nullable();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('role_id')->nullable();
            $table->unsignedInteger('language_id')->nullable();
            $table->unsignedInteger('timezone_id')->nullable();
            $table->string('title')->nullable();
            $table->enum('status', ['Active', 'Suspend'])->default('Active');            
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
        Schema::dropIfExists('people');
    }
}
