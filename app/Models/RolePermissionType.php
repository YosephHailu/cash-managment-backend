<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RolePermissionType extends Model
{
    use HasFactory;

    protected $fillable = ['role_permission_id', 'permission_type_id'];

    /**
     * Get the rolePermission that owns the RolePermissionType
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function rolePermission(): BelongsTo
    {
        return $this->belongsTo(RolePermission::class);
    }

    /**
     * Get the permissionType that owns the RolePermissionType
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function permissionType(): BelongsTo
    {
        return $this->belongsTo(PermissionType::class);
    }
}
