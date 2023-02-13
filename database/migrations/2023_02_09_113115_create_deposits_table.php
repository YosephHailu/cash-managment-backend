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
        Schema::create('deposits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bank_account_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->date("transaction_date");
            $table->string("reference_no");
            $table->string("currency");
            $table->double("transaction_amount", 10);
            $table->string("project");
            $table->longText("reason");
            $table->enum("check_type", ["bearer", "Check"]);

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
        Schema::dropIfExists('deposits');
    }
};
