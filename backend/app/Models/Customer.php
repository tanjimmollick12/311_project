<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Laravel\Sanctum\HasApiTokens;

class Customer extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $table = 'customers';
  //  public $timestamps = false;
    protected $fillable = [
        'f_name',
        'l_name',
        'img_path',
        'gender',
        'DOB',
        'email',
        'contact',
        'password',
        'email_verify'
    ];
    public function address(){
        return $this->hasOne('App\Models\Address');
    }
    public function Order(){
        return $this->belongsTo('App\Models\Order');
    }
    public function Review(){
        return $this->belongsTo('App\Models\Review');
    }
}
