<?php

use Illuminate\Database\Seeder;

class RemindersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reminders')->insert([
            'name' => 'None'              
        ]);        
        DB::table('reminders')->insert([
            'name' => 'At start time'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '5 minutes before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '15 minutes before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '30 minutes before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '1 hour before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '1.5 hours before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '2 hours before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '3 hours before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '6 hours before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '12 hours before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '1 day before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '2 days before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '3 days before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '4 days before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '5 days before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '1 week before start'              
        ]);        
        DB::table('reminders')->insert([
            'name' => '2 weeks before start'              
        ]);        
    }
}
