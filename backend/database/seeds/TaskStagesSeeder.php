<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class TaskStagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_task_stages')->insert([
            'name' => 'To-Do',
            'code' => '#3C4856',
            'workflow_id' => 1
        ]);        
        DB::table('user_default_task_stages')->insert([
            'name' => 'Done',
            'code' => '#14b112',
            'workflow_id' => 1
        ]);        
        DB::table('user_default_task_stages')->insert([
            'name' => 'Backlog',
            'code' => '#2DAE6E',
            'workflow_id' => 2
        ]);        
        DB::table('user_default_task_stages')->insert([
            'name' => 'In progress',
            'code' => '#149E60',
            'workflow_id' => 2  
        ]);        
        DB::table('user_default_task_stages')->insert([
            'name' => 'Complete',
            'code' => '#AE2D45',
            'workflow_id' => 2
        ]);        
    }
}
