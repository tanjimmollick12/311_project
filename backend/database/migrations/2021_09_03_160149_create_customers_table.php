<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('f_name',15)->nullable();
            $table->string('l_name',15);
            $table->string('img_path',255)->nullable();
            $table->enum('gender',['Male','Female']);
            $table->date('DOB')->nullable();
            $table->string('email',35);
            $table->string('contact',11);
            $table->string('password',70);
            $table->boolean('email_verify')->default(0)->nullable();
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
        Schema::dropIfExists('customers');
    }
}
