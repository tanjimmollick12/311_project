<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping_Address extends Model
{
    protected $table = 'shipping_addresses';
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'division',
        'district',
        'sub_district',
        'area',
        'OrderID'
    ];
    public function Order(){
        return $this->hasOne('App\Models\Order');

    }

}
