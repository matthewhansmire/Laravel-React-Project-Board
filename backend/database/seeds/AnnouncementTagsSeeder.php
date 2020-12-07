<?php

use Illuminate\Database\Seeder;

class AnnouncementTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('announcement_tags')->insert([
            'name' => 'Keep subscribers hidden'              
        ]);        
        DB::table('announcement_tags')->insert([
            'name' => 'Allow comments'              
        ]);        
        DB::table('announcement_tags')->insert([
            'name' => 'Pin to top'              
        ]);        
        DB::table('announcement_tags')->insert([
            'name' => 'Schedule for future'              
        ]);        
    }
}
