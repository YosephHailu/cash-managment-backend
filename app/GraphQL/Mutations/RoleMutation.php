<?php

namespace App\GraphQL\Mutations;

use App\Models\Role;
use Illuminate\Support\Facades\Log;
use Psy\Readline\Hoa\Console;

final class RoleMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function update($rootValue, array $args)
    {
        $role = Role::find($args['id']);
        foreach($role->rolePermissions as $rolePermission) {
            $rolePermission->rolePermissionTypes()->delete();
        }

        $role->rolePermissions()->delete();

        foreach($args['rolePermissions']['create'] as $_rolePermission) {
            $rolePermission = $role->rolePermissions()->firstOrCreate([
                'permission_id' => $_rolePermission['permission_id']
            ]);
            foreach($_rolePermission['rolePermissionTypes']['create'] as $rolePermissionType) {
                $rolePermission->rolePermissionTypes()->firstOrCreate(['permission_type_id' => $rolePermissionType['permission_type_id']]);
            }
        }
    }
}
