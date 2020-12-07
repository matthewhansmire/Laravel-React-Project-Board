<?php

use Illuminate\Database\Seeder;

class ProjectCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_default_project_categories')->insert([
            'name' => 'Uncategorized'
        ]);        
    }
}
