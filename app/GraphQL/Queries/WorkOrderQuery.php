<?php

namespace App\GraphQL\Queries;

use App\Models\Dispatch;
use App\Models\WorkOrder;
use Illuminate\Support\Facades\Log;

final class WorkOrderQuery
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

            $workOrders =  WorkOrder::whereIn('id', $dispatches->pluck('work_order_id'))->get();

            $workOrders = $workOrders->map(function($workOrder) use ($args) {
                $workOrder->previously_delivered = $workOrder->dispatches()->where('date', '<', $args['start_date'])->sum('amount');
                $workOrder->executed_quantity = $workOrder->dispatches()->whereBetween('date', [$args['start_date'], $args['end_date']])->sum('amount');
                return $workOrder;
            });
        } else {
            $workOrders = WorkOrder::query()->get();
        }

        return $workOrders;
    }
}
