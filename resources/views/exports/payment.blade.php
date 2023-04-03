<html>
<style>
    th {
        
    }
</style>

<table>
    <thead>
        <tr>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Bank Account
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Transaction Amount
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Payment Method
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Paid To
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Project
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Transaction Date
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Payment Reason
            </th>
    </thead>
    <tbody>
        @foreach($payments as $payment)
        <tr>
            <td style="width: 150px; text-align: center;">{{ $payment->bankAccount->account_number }}</td>
            <td style="width: 150px; text-align: center;">{{ $payment->transaction_amount }}</td>
            <td style="text-align: center;">{{ $payment->payment_method }}</td>
            <td style="width: 150px; text-align: center;">{{ $payment->to }}</td>
            <td style="width: 150px; text-align: center;">{{ $payment->project }}</td>
            <td style="width: 150px; text-align: center;">{{ $payment->transaction_date }}</td>
            <td style="width: 150px; text-align: center;">{{ $payment->reason }}</td>
        </tr>
        @endforeach
    </tbody>
</table>

</html>