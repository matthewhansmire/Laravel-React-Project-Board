<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class ProjectTabsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('project_tabs')->insert([
            'name' => 'Discussions'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Tasks'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Gantt'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Calendar'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Notes'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Files'
        ]);        
        DB::table('project_tabs')->insert([
            'name' => 'Time'
        ]);        
    }
}
