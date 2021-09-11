<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    //public $timestamps = false;
    protected $fillable = [
        'name',
        'Category',
        'Sub_Category',
        'price',
        'In_Stock',
        'Description',
        'Offer'
    ];


    public function Image(){
        return $this->hasMany('App\Models\Product_Image');
    }
    public function Order(){
        return $this->belongsTo('App\Models\Order');
    }
    public function Review(){
        return $this->belongsTo('App\Models\Review');
    }
}
