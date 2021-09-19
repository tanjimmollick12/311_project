<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
    public static function getProducts (){
        $records = DB::table('products')->select('id','name','Category','Sub_Category','price','In_Stock','Description','Offer')
            ->get()->toArray();
        return $records;

    }

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
