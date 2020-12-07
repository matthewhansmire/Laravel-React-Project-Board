<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMilestonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('milestones', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('desc')->nullable();
            $table->date('date')->nullable();
            $table->unsignedInteger('creator_id');
            $table->unsignedInteger('project_id');            
            $table->unsignedInteger('tasklist_id');            
            $table->unsignedInteger('timezone_id');            
            $table->unsignedInteger('reminder_id')->nullable();            
            $table->boolean('mark_private')->default(false);
            $table->boolean('isCompleted')->default(false);
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
        Schema::dropIfExists('milestones');
    }
}
