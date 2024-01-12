<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ["id", "transaction_amount", "amount_in_words", "invoice_number", "cheque_number", 'to_bank_account_id', "transaction_date", "to", "project", "payment_method", "reason", "bank_account_id"];

    /**
     * Get the bankAccount that owns the Payment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bankAccount(): BelongsTo
    {
        return $this->belongsTo(BankAccount::class);
    }

    public function getVoidedDateAttribute()
    {
        return $this->voided_at ? Carbon::parse($this->voided_at)->diffForHumans() : "";
    }

    public function getPaymentDateAttribute()
    {
        return Carbon::parse($this->transaction_date)->format("d-m-Y");
    }

    public function getPaymentPendingAttribute()
    {
        return (Str::lower($this->payment_method) == "check") && Carbon::parse($this->transaction_date)->isFuture();
    }

    public function scopePending(Builder $query, String $search)
    {
        return $query->where([["payment_method", "check"]])->where("transaction_date", ">", Carbon::now());
    }

    public function scopeSearch(Builder $query, String $search)
    {
        return $query->whereHas('bankAccount', function($q) use ($search)  {
            return $q->where('account_number', 'like', "%$search%"); 
        });
    }

}
