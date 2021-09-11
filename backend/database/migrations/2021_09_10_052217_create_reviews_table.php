<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ProductID')->unsigned()->index();
            $table->bigInteger('CID')->unsigned()->index();
            $table->bigInteger('OrderID')->unsigned()->index();
            $table->tinyInteger('rating');
            $table->string('comment',512)->nullable();
            $table->foreign('ProductID')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('CID')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('OrderID')->references('id')->on('orders')->onDelete('cascade');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
