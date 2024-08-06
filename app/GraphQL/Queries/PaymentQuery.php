<?php

namespace App\GraphQL\Queries;

use App\Models\Payment;

final class PaymentQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function paymentPersons($_, array $args)
    {
        $payments = Payment::select('to')->distinct()->get();;

        return $payments;
    }
}
