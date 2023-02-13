<?php

namespace App\GraphQL\Queries;

use App\Models\ConcreteType;
use App\Models\WorkOrder;
use Illuminate\Support\Facades\Log;

final class StatisticQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function dashboardStatistics($_, array $args)
    {
        $response = collect([
            "total_order_count" => 0,
            "pending_order_count" => 0,
            "approved_order_count" => 0,
            "rejected_order_count" => 0,
            "checked_order_count" => 0,
        ]);

        $concreteTypes = ConcreteType::query();
        $barChartData = collect();
        $workOrders = WorkOrder::query()->get();
        foreach($workOrders->groupBy('concrete_type_id') as $concrete_type_id => $_workOrders) {
            $barChartDatasets = collect([
                'barChartDatasets' => collect()
            ]);
            $concreteType = ConcreteType::find($concrete_type_id);
            $barChartDatasets['label'] = $concreteType->name;
            $barChartDatasets['backgroundColor'] = "#f8" . rand(1000, 9999);

            $barChartDatasets['barChartDatasets']->push(
                collect([
                    'label' => "All Work Orders",
                    'value' => $concreteType->workOrders()->sum('order_quantity')
                ])
            );
            $barChartDatasets['barChartDatasets']->push(
                collect([
                    'label' => "Pending Work Orders",
                    'value' => $concreteType->workOrders()->where([['checked', false]])->sum('order_quantity')
                ])
            );
            $barChartDatasets['barChartDatasets']->push(
                collect([
                    'label' => "Approved Work Orders",
                    'value' => $concreteType->workOrders()->where([['approved', true]])->sum('order_quantity')
                ])
            );
            $barChartData->push($barChartDatasets);
        }

        // Log::debug($barChartData);

        // foreach($concreteTypes->get() as $concreteType) {
        //     $barChartData->push([
        //         'label' => $concreteType->name,
        //         'value' => $concreteType->workOrders()->sum('order_quantity')
        //     ]);
        // }

        // $response['barChartData'] = [collect(
        //     [
        //         'barChartDatasets' => collect([[
        //             'label' => 'lab',
        //             'value' => 45
        //         ]])
        //     ]
        // )];
        $response['barChartData'] = $barChartData;
        Log::debug($response);
        $response['total_order_count'] = WorkOrder::count();
        $response['pending_order_count'] = WorkOrder::where([['checked', false]])->count();
        $response['checked_order_count'] = WorkOrder::where([['checked', false]])->count();
        $response['approved_order_count'] = WorkOrder::where([['approved', false]])->count();

        return $response;
    }
}
