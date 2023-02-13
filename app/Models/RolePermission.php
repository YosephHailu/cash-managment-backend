<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RolePermission extends Model
{
    use HasFactory;

    protected $fillable = ['role_id', 'permission_id'];
    /**
     * The permissionTypes that belong to the Role
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissionTypes(): BelongsToMany
    {
        return $this->belongsToMany(PermissionType::class, RolePermissionType::class, 'role_permission_id', 'permission_type_id');
    }

    /**
     * Get the role that owns the RolePermission
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get the permission that owns the RolePermission
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function permission(): BelongsTo
    {
        return $this->belongsTo(Permission::class);
    }

    /**
     * Get all of the rolePermissionTypes for the RolePermission
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rolePermissionTypes(): HasMany
    {
        return $this->hasMany(RolePermissionType::class);
    }

    // /**
    //  * The permissionTypes that belong to the RolePermission
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    //  */
    // public function permissionTypes(): BelongsToMany
    // {
    //     return $this->belongsToMany(PermissionType::class, RolePermissionType::class, 'role_permission_id', 'permission_type_id');
    // }
}
