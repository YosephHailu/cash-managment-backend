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
            $table->string("payment_method");

            $table->foreignId('voided_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('voided_at')->nullable();
            $table->boolean('voided')->default(false);
            $table->longText('voided_reason')->nullable();
            
            $table->foreignId('checked_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('checked_at')->nullable();
            $table->boolean('checked')->default(false);
            
            $table->foreignId('approved_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('approved_at')->nullable();
            $table->boolean('approved')->default(false);
            
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
