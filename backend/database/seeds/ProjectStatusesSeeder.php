<?php

use Illuminate\Database\Seeder;

class ProjectStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_project_statuses')->insert([
            'name' => 'Active'
        ]);        
    }
}
