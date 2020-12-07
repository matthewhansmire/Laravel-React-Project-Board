<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class TasklistTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasklist_tags')->insert([
            'name' => 'Mark as private'              
        ]);        
        DB::table('tasklist_tags')->insert([
            'name' => 'Display list in Gantt chart'              
        ]);        
        DB::table('tasklist_tags')->insert([
            'name' => 'Enable time tracking'              
        ]);        
        DB::table('tasklist_tags')->insert([
            'name' => 'Associate a milestone'              
        ]);        
    }
}
