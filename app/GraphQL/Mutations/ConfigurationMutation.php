<?php

namespace App\GraphQL\Mutations;

use App\Constants\FileFolders;
use App\Models\Configuration;
use Exception;

final class ConfigurationMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function store($rootValue, array $args)
    {
        $data = collect($args)->only(['company_name', 'company_address', 'issue_no', 'document_no', 'document_label', 'voucher_for_all']);

        $config = Configuration::create($data->toArray());

        try {
            if($args['company_logo']){
                $config->addMedia($args['company_logo'])->toMediaCollection(FileFolders::COMPANY_LOGO);
            }
        } catch(Exception $exception) {}
        
        return $config;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only(['company_name', 'company_address', 'issue_no', 'document_no', 'document_label', 'voucher_for_all']);

        $config = Configuration::find($args['id']);
        $config->update($data->toArray());

        try {
            if($args['company_logo']){
                $config->media()->delete();
                $config->addMedia($args['company_logo'])->toMediaCollection(FileFolders::COMPANY_LOGO);
            }
        } catch(Exception $exception) {}
        
        return $config;
    }
}
