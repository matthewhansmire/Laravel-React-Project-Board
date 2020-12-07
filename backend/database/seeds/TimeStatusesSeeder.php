<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class TimeStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('time_statuses')->insert([
            'name' => 'None'              
        ]);        
        DB::table('time_statuses')->insert([
            'name' => 'Billed'              
        ]);        
        DB::table('time_statuses')->insert([
            'name' => 'Billable'              
        ]);        
        DB::table('time_statuses')->insert([
            'name' => 'Non-billable'              
        ]);        
        DB::table('time_statuses')->insert([
            'name' => 'Void'              
        ]);        
    }
}
