<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;

class Deposit extends Model
{
    use HasFactory;
    
    protected $fillable = ["id", "transaction_date", "bank_account_id", "reference_no", "currency", "transaction_amount", "check_type", "reason", "project"];

    /**
     * Get the bankAccount that owns the Deposit
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bankAccount(): BelongsTo
    {
        return $this->belongsTo(BankAccount::class);
    }

    public function scopeSearch(Builder $query, String $search)
    {
        return $query->whereHas('bankAccount', function($q) use ($search)  {
            return $q->where('account_number', 'like', "%$search%"); 
        });
    }

}
