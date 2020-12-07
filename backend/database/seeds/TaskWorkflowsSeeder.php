<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class TaskWorkflowsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_task_workflows')->insert([
            'id' => 1,
            'name' => 'Basic workflow'
        ]);        
        DB::table('user_default_task_workflows')->insert([
            'id' => 2,
            'name' => '3-stage Kanban workflow'
        ]);
    }
}
