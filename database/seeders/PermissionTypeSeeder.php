<?php

namespace Database\Seeders;

use App\Models\PermissionType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PermissionType::firstOrCreate(['action' => 'Read']);
        PermissionType::firstOrCreate(['action' => "Create"]);	
        PermissionType::firstOrCreate(['action' => "Delete"]);	
        PermissionType::firstOrCreate(['action' => "Update"]);	
        PermissionType::firstOrCreate(['action' => "Check"]);	
        PermissionType::firstOrCreate(['action' => "Approve"]);	
        PermissionType::firstOrCreate(['action' => "Cancel"]);	
        PermissionType::firstOrCreate(['action' => "Receive"]);	
        PermissionType::firstOrCreate(['action' => "Reject"]);	
        PermissionType::firstOrCreate(['action' => "Start"]);	
        PermissionType::firstOrCreate(['action' => "Incomplete"]);	
        PermissionType::firstOrCreate(['action' => "Complete"]);	
        PermissionType::firstOrCreate(['action' => "Enable"]);	
        PermissionType::firstOrCreate(['action' => "Disable"]);
    }
}
