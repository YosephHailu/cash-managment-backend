<?php

namespace App\GraphQL\Queries;

use App\Models\Dispatch;
use App\Models\Item;

final class ItemQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function search($_, array $args) 
    {
        if(($args['start_date'] ?? null != null) && ($args['end_date'] ?? null != null)) {
            $dispatches = Dispatch::whereBetween('date', [$args['start_date'], $args['end_date']]);

            $items =  Item::whereIn('id', $dispatches->pluck('work_order_id'))->get();

            $items = $items->map(function($item) use ($args) {
                $item->previously_delivered = $item->dispatches()->where('date', '<', $args['start_date'])->sum('amount');
                $item->executed_quantity = $item->dispatches()->whereBetween('date', [$args['start_date'], $args['end_date']])->sum('amount');
                return $item;
            });
        } else {
            $items = Item::query()->get();
        }

        return $items;
    }
}
