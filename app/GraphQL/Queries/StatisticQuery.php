<?php

namespace App\GraphQL\Queries;

use App\Models\BankAccount;
use App\Models\ConcreteType;
use App\Models\Deposit;
use App\Models\Payment;
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
            "total_balance" => 0,
            "total_deposited" => 0,
            "total_payment" => 0,
        ]);

        // $concreteTypes = ConcreteType::query();
        $barChartData = collect();
        // $workOrders = WorkOrder::query()->get();
        // foreach($workOrders->groupBy('concrete_type_id') as $concrete_type_id => $_workOrders) {
        //     $barChartDatasets = collect([
        //         'barChartDatasets' => collect()
        //     ]);
        //     $concreteType = ConcreteType::find($concrete_type_id);
        //     $barChartDatasets['label'] = $concreteType->name;
        //     $barChartDatasets['backgroundColor'] = "#f8" . rand(1000, 9999);

        //     $barChartDatasets['barChartDatasets']->push(
        //         collect([
        //             'label' => "All Work Orders",
        //             'value' => $concreteType->workOrders()->sum('order_quantity')
        //         ])
        //     );
        //     $barChartDatasets['barChartDatasets']->push(
        //         collect([
        //             'label' => "Pending Work Orders",
        //             'value' => $concreteType->workOrders()->where([['checked', false]])->sum('order_quantity')
        //         ])
        //     );
        //     $barChartDatasets['barChartDatasets']->push(
        //         collect([
        //             'label' => "Approved Work Orders",
        //             'value' => $concreteType->workOrders()->where([['approved', true]])->sum('order_quantity')
        //         ])
        //     );
        //     $barChartData->push($barChartDatasets);
        // }

        $response['barChartData'] = $barChartData;
        // Log::debug($response);
        $response['total_balance'] = BankAccount::sum('balance');
        $response['total_deposited'] = Deposit::sum("transaction_amount");
        $response['total_payment'] = Payment::where('voided_by_id', null)->sum("transaction_amount");
        return $response;
    }
}
