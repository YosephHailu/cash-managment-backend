<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\PermissionType;
use App\Models\Role;
use App\Models\RolePermission;
use App\Models\RolePermissionType;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::firstOrCreate(
            ['code' => 'Admin'],
            ['name' => 'Admin', 'description' => 'Administrator with full access', 'is_active' => true]
        );

        $permissions = Permission::all();
        $permissionTypes = PermissionType::all();

        foreach ($permissions as $permission) {
            $rolePermission = RolePermission::firstOrCreate([
                'role_id' => $role->id,
                'permission_id' => $permission->id,
            ]);

            foreach ($permissionTypes as $permissionType) {
                RolePermissionType::firstOrCreate([
                    'role_permission_id' => $rolePermission->id,
                    'permission_type_id' => $permissionType->id,
                ]);
            }
        }
    }
}
