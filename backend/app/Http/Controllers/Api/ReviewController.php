<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product_image;
use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    public function GiveReview(Request $request, $id)
    {

        $validator = $this->validate($request, [
            'oid' => 'required',
            'rating' => 'numeric|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $CID = auth()->user()->id;
        $productID = $id;

        $input_order_id = $request->input('oid');


        DB::beginTransaction();



//        $orderID = $order->id;

        //check review
        $isExist = Review::select("*")
            ->where("OrderID", $input_order_id)
            ->exists();
        $isExist2 = Order::select("*")
            ->where("id", $input_order_id)
            ->exists();
        $order = DB::table('orders')->select('*')->
        where('CID', '=', $CID)->
        where('Product_ID', '=', $productID)->
        where("id", $input_order_id)->
        first();
        $del_status = $order->payment_status;
        $pay_status = $order->Del_Status;

        if(!$isExist) {
            if ($isExist2) {
                //check payment & delivery status
                if ($del_status == true and $pay_status == true) {

                    $review = new Review();
                    $review->ProductID = $productID;
                    $review->CID = $CID;
                    $review->OrderID = $input_order_id;
                    $review->rating = $request->input('rating');
                    $review->comment = $request->input('comment');
                    if ($validator) {
                        $review->save();
                        DB::commit();
                        return response()->json([

                            "status" => 1,
                            "message" => "Review Taken Successfully"

                        ]);
                    } else {
                        return response()->json([

                            "status" => 1,
                            "message" => "error"

                        ]);

                    }


                } else {
                    return response()->json([
                        "status" => 0,
                        "message" => "You Can't Review AT this moment"
                    ]);

                }

            } else {
                return response()->json([
                    "status" => 0,
                    "message" => "Order ID did not match"
                ]);
            }
        }else{
            return response()->json([
                "status" => 0,
                "message" => "You can not review Twice"
            ]);

        }

    }
}
