<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('CID')->unsigned()->index();
            $table->bigInteger('Product_ID')->unsigned()->index();
            $table->tinyInteger('ProdQTY');
            $table->decimal('Del_Charge')->nullable();
            $table->decimal('Amount')->nullable();
            $table->boolean('payment_status')->nullable();
            $table->boolean('Del_Status')->nullable();
            $table->string('Contact',11);
            $table->foreign('Product_ID')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('CID')->references('id')->on('customers')->onDelete('cascade');
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
        Schema::dropIfExists('orders');
    }
}
