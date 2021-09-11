<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $table = 'reviews';
    public $timestamps = false;

    protected $fillable = [
        'ProductID',
        'CID',
        'OrderID',
        'rating',
        'comment'
    ];
    public function Order(){
        return $this->hasOne('App\Models\Order');
    }
    public function Customer(){
        return $this->hasOne('App\Models\Customer');
    }
    public function Product(){
        return $this->hasOne('App\Models\Product');
    }
}
