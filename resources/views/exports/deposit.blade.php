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
                Transaction Date
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Reference Number
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Check Type
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Currency
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Project
            </th>
            <th style="text-align: center; background-color: gray; text-transform: uppercase">
                Reason
            </th>
    </thead>
    <tbody>
        @foreach($deposits as $deposit)
        <tr>
            <td style="width: 150px; text-align: center;">{{ $deposit->bankAccount->account_number }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->transaction_amount }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->transaction_date }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->reference_no }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->check_type }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->currency }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->project }}</td>
            <td style="width: 150px; text-align: center;">{{ $deposit->reason }}</td>
        </tr>
        @endforeach
    </tbody>
</table>

</html>
