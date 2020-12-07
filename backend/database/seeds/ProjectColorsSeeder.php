<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class ProjectColorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('system_const_project_colors')->insert([
            'code' => '#e8423c'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#ee4884'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#b200ff'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#8860c8'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#6675c6'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#2192e8'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#009385'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#3f9843'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#f9b128'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#ff7b4b'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#795548'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#607d8b'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#829aa5'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#4a4a4a'
        ]);        
        DB::table('system_const_project_colors')->insert([
            'code' => '#cddc39'
        ]);        
    }
}
