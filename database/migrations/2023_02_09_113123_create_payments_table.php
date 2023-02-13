<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string("to");
            $table->double("transaction_amount", 10);
            $table->string("amount_in_words");
            $table->longText("reason");
            $table->string("project");
            $table->date("transaction_date")->default(now());
            $table->string("currency")->default("ETB");

            $table->foreignId('bank_account_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('to_bank_account_id')->nullable()->constrained('bank_accounts')->onUpdate('restrict')->onDelete('restrict');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
