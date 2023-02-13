<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::firstOrCreate(['name' => 'Bank'], [ 'code' => 'Bank', 'resource' => 'Bank']);
        Permission::firstOrCreate(['name' => 'BankAccount'], [ 'code' => 'BankAccount', 'resource' => 'BankAccount']);
        Permission::firstOrCreate(['name' => 'Deposit'], [ 'code' => 'Deposit', 'resource' => 'Deposit']);
        Permission::firstOrCreate(['name' => 'Payment'], [ 'code' => 'Payment', 'resource' => 'Payment']);
        Permission::firstOrCreate(['name' => 'User'], [ 'code' => 'User', 'resource' => 'User']);
        Permission::firstOrCreate(['name' => 'Role'], [ 'code' => 'Role', 'resource' => 'Role']);
        Permission::firstOrCreate(['name' => 'Permission'], [ 'code' => 'Permission', 'resource' => 'Permission']);
        Permission::firstOrCreate(['name' => 'PermissionType'], [ 'code' => 'PermissionType', 'resource' => 'PermissionType']);
        Permission::firstOrCreate(['name' => 'Report'], [ 'code' => 'Report', 'resource' => 'Report']);

    }
}
