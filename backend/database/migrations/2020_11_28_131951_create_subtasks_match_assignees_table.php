<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubtasksMatchAssigneesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subtasks_match_assignees', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('subtask_id');
            $table->unsignedInteger('assignee_id');
            $table->unsignedInteger('stage_id')->nullable();
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
        Schema::dropIfExists('subtasks_match_assignees');
    }
}
