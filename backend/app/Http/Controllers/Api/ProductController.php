<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product_image;
use App\Models\Review;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function AddProduct(Request $request)
    {
        $validator = $this->validate($request, [
            'name' => 'required',
            'Category' => 'required',
            'price' => 'required',
            'In_Stock' => 'required',
        ]);
        $product = new Product();
        $product->name = $request->input('name');
        $product->Category = $request->input('Category');
        $product->Sub_Category = $request->input('Sub_Category');
        $product->price = $request->input('price');
        $product->In_Stock = $request->input('In_Stock');
        $product->Description = $request->input('Description');
        $product->Offer = $request->input('Offer');


        if ($validator) {

            $product->save();
            return response()->json([

                "status" => 1,
                "message" => "Product Added Successfully"
            ]);
        } else {
            return response()->json([

                "status" => 0,
                "message" => 'Error'
            ]);
        }

    }

    public function AddProdImage(Request $request, $id)
    {
        $prod_image = new Product_image();
        DB::beginTransaction();
        $prod_id = DB::table('product_images')
            ->where('Product_ID', '=', $id)
            ->exists();
        $fileName = $request->file->getClientOriginalName();
        $filePath = $request->file('file')->storeAs('prod_images', $fileName, 'public');
        $img_path = $prod_image->image_path = '/storage/' . $filePath;
        if ($prod_id) {
            // user found
            $prod_image->image_path = $img_path;
            $prod_image->Product_ID = $id;
            $prod_image->save();

        } else {
            $prod_image->image_path = $img_path;
            $prod_image->Product_ID = $id;
            $prod_image->save();
        }
        DB::commit();
        return response()->json([

            "status" => 1,
            "message" => "Product Image Added Successfully"
        ]);

    }
    public function updateProduct(Request $request,$id){
        DB::beginTransaction();
        $name = $request->input('name');
        $Category = $request->input('Category');
        $Sub_Category = $request->input('Sub_Category');
        $price = $request->input('price');
        $in  = $request->input('In_Stock');
        $Description = $request->input('Description');
        $Offer = $request->input('Offer');


         DB::table('products')->where('id', $id)->
         update(['In_Stock' => $in,'name'=>$name,'Category'=>$Category,
             'Sub_Category'=>$Sub_Category,
             'price'=>$price,'Description'=>$Description,'Offer'=>$Offer]);
         DB::commit();
        return response()->json([
        'message'=>'Product Updated Successfully'
       ]);


    }
    public function productDetails($id){

        DB::beginTransaction();
        $product = DB::table('products')->select('*')->
        where('id', '=', $id)->
        first();
        $P_id = $product->id;
        $P_name = $product->name;
        $P_cat = $product->Category;
        $P_subCat = $product->Sub_Category;
        $P_price = $product->price;
        $P_InStock = $product->In_Stock;
        $P_Description = $product->Description;

        $images = Product_image::where('Product_ID', $id)->get(['image_path']);
        $rate = DB::table('reviews')
            ->where('ProductID','=', $id)
            ->avg('rating');
        $numOfReviews = DB::table('reviews')
            ->where('ProductID','=', $id)
            ->count('id');
        DB::commit();
        return response()->json([
            "product_id"=> $P_id,
            "product_name"=>  $P_name,
            "product_category"=>  $P_cat,
            "product_subcategory"=>  $P_subCat,
            "product_price"=> $P_price,
            "product_inStock"=> $P_InStock,
            "product_description"=>  $P_Description,
            "product_images"=> $images,
            "rating"=>$rate,
            'num Of Reviews'=>$numOfReviews

        ]);

    }
    public  function productList(){
        $products = Product::join('product_images', 'products.id', '=', 'product_images.Product_ID')
            ->get(array_merge(['products.*'],['product_images.image_path']));
        return response()->json([
            $products
        ]);

    }
    public  function prodTable(){
        $prodTable = Product::all();
        return response()->json([
            $prodTable

        ]);
    }
}
