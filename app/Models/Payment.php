<?php

namespace App\Models;

use App\Constants\FileFolders;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Payment extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    
    protected $fillable = ["id", "transaction_amount", "amount_in_words", "invoice_number", "cheque_number", 'to_bank_account_id', "transaction_date", "to", "project", "payment_method", "reason", "bank_account_id"];

    function ScopeDates(Builder $query, $value) {
        if(($value[0] ?? false) && ($value[1] ?? false)) {
            return $query->whereBetween('transaction_date', [Carbon::parse($value[0]), Carbon::parse($value[1])]);
        } else {
            return $query;
        }
    }

    function ScopeFuture(Builder $query, $value) {
        return $query->whereDate('transaction_date', ">", Carbon::now());
    }

    public function getAttachmentUrlsAttribute()
    {
        $file_urls = [];
        foreach($this->getMedia(FileFolders::PAYMENT_ATTACHMENT) as $media) {
            array_push($file_urls, $media->getFullUrl());
        }
        
        return $file_urls;
    }

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
