<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Customer;
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
            'DOB' => 'required',
            'contact' => 'required',
            'email' => 'required|email|unique:customers',
            'password' => 'required|min:6|confirmed'
        ]);
        //create data


//

        $customer = new Customer();
        $customer->f_name = $request->f_name;
        $customer->l_name = $request->l_name;
        $customer->gender = $request->gender;
        $customer->DOB = $request->DOB;
        $customer->contact = $request->contact;
        $customer->email = $request->email;
        $customer->password = Hash::make($request->password);
        $customer->contact = ($request->contact);
        $customer->save();

        // send response
        if ($validator) {
            return response()->json([

                "status" => 1,
                "message" => "Registered Successfully"
            ]);
        } else {
            return response()->json([

                "status" => 0,
                "message" => 'Invalid Input'
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

        return response()->json([
            'customer' => $current_user,
            'token' => $current_user->createToken('mobile', ['role:customer'])->plainTextToken
        ]);

    }

    public function profile()
    {
        $current_user_id = auth()->user()->id;
        $current_user = DB::table('customers')->select('f_name','l_name'
        ,'gender','img_path','DOB','')->
        where('id', '=', $current_user_id)->
        first();

        return response()->json(
            [
                $current_user
            ]);
    }

    public function update(Request $request)

    {

        $current_cus = auth()->user();
        $current_cus->f_name = $request->f_name;
        $current_cus->l_name = $request->l_name;
        $current_cus->gender = $request->gender;
        $current_cus->DOB = $request->DOB;
        $current_cus->contact = $request->contact;
        $current_cus_id = auth()->user()->id;
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

        return response()->json(["status" => 1,
            "message" => "Profile Update Successfully"]);

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
        return response()->json([
            $customerTable
        ]);
    }
}
