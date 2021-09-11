<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'addresses';
    use HasFactory;
    //public $timestamps = false;
    protected $fillable = [
        'division',
        'district',
        'sub_district',
        'area',
        'CID'
    ];
    public function customer(){
        return $this->belongsTo('App\Models\Customer');
    }
}
