<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Shipping_Address;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function CreateOrder(Request $request, $id)
    {
        $prod_qty = DB::table('products')->where('id', $id)->first()->In_Stock;
        $prod_price = DB::table('products')->where('id', $id)->first()->price;
        $validator = $this->validate($request, [
            'ProdQTY' => 'required',
            'Del_Charge' => 'required',
            'Contact' => 'required',
            'division' => 'required',
            'district'=>'required',
            'sub_district'=>'required'

        ]);
        $CID = auth()->user()->id;
        DB::beginTransaction();


        $order = new Order();
        $order->Product_ID = $id;
        $order->CID = $CID;
        $order->ProdQTY = $request->ProdQTY;
        $order->Del_Charge = $request->Del_Charge;
        $order->Amount = $order->ProdQTY * $prod_price;
        $order->Contact = $request->Contact;

        if ($validator && $request->ProdQTY <= $prod_qty) {
            $order->save();

            $oid =DB::table('orders')->max('id');
            $prod_qty = $prod_qty - $order->ProdQTY;


            DB::table('products')->where('id', $id)->update(['In_Stock' => $prod_qty]);

            $s_add = new Shipping_Address();
            $s_add->division = $request->division;
            $s_add->district = $request->district;
            $s_add->sub_district = $request->sub_district;
            $s_add->area = $request->area;
            $s_add->OrderID = $oid;
            $s_add->save();
            DB::commit();
            return response()->json([

                "status" => 1,
                "message" => "Order Has Been Placed"
            ]);
        } else {
            return response()->json([

                "status" => 0,
                "message" => "Error"
            ]);

        }
    }

    public function DelStatus(Request $request, $id)
    {
        $order = new Order();
        $del = $order->Del_Status = $request->Del_Status;
        if (Order::find($id)) {
            DB::table('orders')->where('id', $id)->update(['Del_Status' => $del]);
            return response()->json([

                "status" => 1,
                "message" => "Deliveried Status Updated"
            ]);
        } else {
            return response()->json([

                "status" => 0,
                "message" => "Order Not Found"
            ]);

        }

    }

    public function PayStatus(Request $request, $id)
    {
        $order = new Order();
        $pay = $order->payment_status = $request->payment_status;
        if (Order::find($id)) {
            DB::table('orders')->where('id', $id)->update(['payment_status' => $pay]);
            return response()->json([

                "status" => 1,
                "message" => "Payment Status Updated"
            ]);
        } else {
            return response()->json([

                "status" => 0,
                "message" => "Order Not Found"
            ]);

        }

    }

    public function orderTable(){

        $orderTable = Order::all();
        return response()->json([
            $orderTable

        ]);
    }
}
