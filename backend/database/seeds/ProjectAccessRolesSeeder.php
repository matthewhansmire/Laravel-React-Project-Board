<?php

use Illuminate\Database\Seeder;

class ProjectAccessRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_project_access_roles')->insert([
            'name' => 'Normal User'
        ]);        
        DB::table('user_default_project_access_roles')->insert([
            'name' => 'Admin User'
        ]);        
    }
}
