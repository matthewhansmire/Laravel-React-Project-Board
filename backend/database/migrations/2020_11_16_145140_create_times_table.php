<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('times', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('hours');
            $table->integer('minutes');
            $table->string('desc')->nullable();
            $table->unsignedInteger('creator_id');
            $table->unsignedInteger('project_id');
            $table->unsignedInteger('timesheet_id');
            $table->unsignedInteger('tasklist_id')->nullable();
            $table->unsignedInteger('task_id')->nullable();
            $table->unsignedInteger('subtask_id')->nullable();
            $table->unsignedInteger('status_id');          
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
        Schema::dropIfExists('times');
    }
}
