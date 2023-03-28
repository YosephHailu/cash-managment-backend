<?php

namespace App\Models;

use App\Constants\FileFolders;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Configuration extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    protected $fillable = ['company_name', 'company_address', 'issue_no', 'document_no', 'document_label'];

    public function scopeActive(Builder $query, String $search)
    {
        return $query->last();
    }

    public function getCompanyLogoUrlAttribute()
    {
        return $this->getFirstMediaUrl(FileFolders::COMPANY_LOGO);
    }

}
