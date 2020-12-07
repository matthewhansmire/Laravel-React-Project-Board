<?php

use Illuminate\Database\Seeder;

class TaskProgressesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('system_const_task_progresses')->insert([
            'name' => '0%',
            'value' => 0
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '10%',
            'value' => 10
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '20%',
            'value' => 20
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '30%',
            'value' => 30
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '40%',
            'value' => 40
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '50%',
            'value' => 50
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '60%',
            'value' => 60
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '70%',
            'value' => 70
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '80%',
            'value' => 80
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '90%',
            'value' => 90
        ]);        
        DB::table('system_const_task_progresses')->insert([
            'name' => '100%',
            'value' => 100
        ]);        
    }
}
