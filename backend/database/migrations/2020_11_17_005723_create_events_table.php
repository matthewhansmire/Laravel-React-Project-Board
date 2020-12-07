<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('desc')->nullable();
            $table->dateTime('start');
            $table->dateTime('end');
            $table->unsignedInteger('creator_id');
            $table->unsignedInteger('project_id');            
            $table->unsignedInteger('timezone_id');            
            $table->unsignedInteger('repeat_id')->nullable();            
            $table->unsignedInteger('reminder_id')->nullable();            
            $table->boolean('mark_private')->default(false);
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
        Schema::dropIfExists('events');
    }
}
