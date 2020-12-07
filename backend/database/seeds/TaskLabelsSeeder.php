<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class TaskLabelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_task_labels')->insert([
            'name' => 'High',
            'code' => '#BF0000'
        ]);        
        DB::table('user_default_task_labels')->insert([
            'name' => 'In-progress',
            'code' => '#149E60'
        ]);        
        DB::table('user_default_task_labels')->insert([
            'name' => 'Low',
            'code' => '#999999'
        ]);        
        DB::table('user_default_task_labels')->insert([
            'name' => 'Medium',
            'code' => '#FBB008'
        ]);        
        DB::table('user_default_task_labels')->insert([
            'name' => 'Urgent',
            'code' => '#FF6600'
        ]);        
    }
}
