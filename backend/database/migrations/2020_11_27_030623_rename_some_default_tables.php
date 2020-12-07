<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameSomeDefaultTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('user_project_default_categories', 'user_default_project_categories');
        Schema::rename('user_project_default_statuses', 'user_default_project_statuses');
        Schema::rename('user_tasklist_default_workflows', 'user_default_tasklist_workflows');
        Schema::rename('user_tasklist_default_stages', 'user_default_tasklist_stages');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
