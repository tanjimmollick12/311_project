<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Nette\Schema\ValidationException;

class CustomerController extends Controller
{
    public function signUp(Request $request)
    {
        //validation
        $validator = $this->validate($request, [
            'l_name' => 'required',
            'gender' => 'required',
            'contact' => 'required',
            'email' => 'required|email|unique:customers',
            'password' => 'required|min:6|confirmed'
        ]);
        //create data


//

        $customer = new Customer();
        $customer->f_name = $request->input('f_name');;
        $customer->l_name = $request->input('l_name');
        $customer->gender = $request->input('gender');
        $customer->DOB = $request->input('DOB');
        $customer->contact = $request->input('contact');
        $customer->email = $request->input('email');
        $customer->password = Hash::make($request->input('password'));

   $message = 'registered successfully';
        // send response
        if ($validator) {
            $customer->save();
            $success =[
                'status'=> 1,
                'message'=>$message
            ];
            return response()->json(
                $success
            );
        } else {
            $fail = [

                'status'=> 0,
                'message'=>"Invalid Input"
            ];

            return response()->json([

            ]);
        }
    }

    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $current_user = Customer::where('email', $request->email)->first();

        if (!$current_user || !Hash::check($request->password, $current_user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $cid = $current_user->id;
        $f_name = $current_user->f_name;
        $l_name = $current_user->l_name;
        $email = $current_user->email;

          $token = $current_user->createToken('mobile', ['role:customer'])->plainTextToken;
        $data = [
            'id'=> $cid,
            'f_name'=> $f_name,
            'l_name' => $l_name,
            'email' =>$email,
            'token' => $token
         ];

        return response()->json(
            $data
            );

    }

    public function profile()
    {
        $current_user_id = auth()->user()->id;
        DB::beginTransaction();
        $add = DB::table('addresses')->where('CID', $current_user_id)->first();
        if($add){
            $current_user =    DB::table('customers')
                ->select('customers.*','addresses.division','addresses.district',
                    'addresses.sub_district','addresses.area')
                ->join('addresses','customers.id','=','addresses.CID')
                ->where('customers.id', '=', $current_user_id)
                ->get();
        }else{

            $current_user =    DB::table('customers')
                ->select('customers.*')
                ->where('customers.id', '=', $current_user_id)
                ->get();
        }

        DB::commit();

        return response()->json(
            $current_user
        );
    }

    public function update(Request $request)

    {

        $current_cus = auth()->user();
        $current_cus_id = auth()->user()->id;
        $current_cus->f_name = $request->f_name;
        $current_cus->l_name = $request->l_name;
        $current_cus->gender = $request->gender;
        $current_cus->DOB = $request->DOB;
        $current_cus->contact = $request->contact;

        $address = [
            'division' => $request->division,
            'district' => $request->district,
            'sub_district' => $request->sub,
            'area' => $request->area,
            'CID' => $current_cus_id
        ];
        DB::beginTransaction();

        $cus_add = DB::table('addresses')
            ->where('CID', '=', $current_cus_id)
            ->exists();

        if ($cus_add) {
            // user found
            DB::table('addresses')->update($address);
        } else {
            DB::table('addresses')->insert($address);
        }
        // Update user
        $current_cus->update();
        DB::commit();
        $data = [
            "status" => 1,
            "message" => "Profile Update Successfully"

        ];
        return response()->json($data);

    }

    public function upImage(Request $request)
    {

        $current_cus = auth()->user();

        $fileName = $request->file->getClientOriginalName();
        $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');
        $current_cus->img_path = '/storage/' . $filePath;
        $current_cus->update();
        return response()->json(["status" => 1,
            "message" => "Profile picture Added Successfully"]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 1,
            'message' => 'Customer Logout Successfully'
        ]);
    }
    public function delete(){

        $current_cus = auth()->user();
        $current_cus->delete();
        return response()->json([
            'status' => 1,
            'message' => 'Profile deleted Successfully'
        ]);
    }
    public function customerTable(){

        $customerTable = Customer::all();
        return response()->json(
            $customerTable
        );
    }
    public function deleteByAdmin($id){
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json([
            'status' => 1,
            'message' => 'Customer deleted Successfully'
        ]);
    }
    public function purchaseHistory()
    {
        $current_user_id = auth()->user()->id;
//        $current_user =    DB::table('products')
//            ->select('orders.id','products.id','products.name',
//                'orders.Del_Status')
//            ->join('orders','products.id','=','orders.Product_ID')
//            ->where('orders.CID', '=', $current_user_id)
//            ->get();

        $result = DB::Table('orders')->select('*')->where('orders.CID','=',$current_user_id)->get();
        return response()->json(
            $result

        );
    }

}
