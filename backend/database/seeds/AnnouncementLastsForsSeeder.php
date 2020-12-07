<?php

use Illuminate\Database\Seeder;

class AnnouncementLastsForsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('announcement_lastsfor')->insert([
            'name' => '24 hours'              
        ]);        
        DB::table('announcement_lastsfor')->insert([
            'name' => '48 hours'              
        ]);        
        DB::table('announcement_lastsfor')->insert([
            'name' => 'A week'              
        ]);        
        DB::table('announcement_lastsfor')->insert([
            'name' => 'Forever'              
        ]);        
    }
}
