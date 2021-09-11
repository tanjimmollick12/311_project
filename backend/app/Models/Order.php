<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    //public $timestamps = false;
    protected $fillable = [
        'CID',
        'Product_ID',
        'ProdQTY',
        'Del_Charge',
        'Amount',
        'payment_status',
        'Del_Status',
        'Contact',
        'S_add_ID',
        'Order_Time'
    ];
    public function Product(){
        return $this->hasOne('App\Models\Product');
    }
    public function Customer(){
        return $this->hasOne('App\Models\Customer');
    }
    public function S_Address(){

        return $this->belongsTo('App\Models\Shipping_Address');

    }    public function Review(){

        return $this->belongsTo('App\Models\Review');

    }
}
