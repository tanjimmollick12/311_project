<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function register(Request $request)
    {
        //validation
        $validator = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|',
            'password' => 'required|confirmed'
        ]);
        //create data

        $admin = admin::all();

        if ($admin->isEmpty()) {
            $admin = new Admin();
            $admin->name = $request->input('name');
            $admin->email = $request->input('email');
            $admin->password = Hash::make($request->input('password'));
            $admin->phone = ($request->input('phone'));
            $admin->save();
        } else {
            return response()->json([

                "status" => 0,
                "message" => "You can't Register for Admin"
            ]);
        }
//       event(new Registered($admin));


        // send response
        if ($validator) {
            return response()->json([

                "status" => 1,
                "message" => "Registered Successfully"
            ]);
        } else {

        }
    }


    public function login(Request $request)
    {
        //validation
        $this->validate($request, [

            'email' => 'required|email',
            'password' => 'required'
        ]);
        //check admin
        $admin = Admin::where("email", "=", $request->email)->first();
        if (isset($admin->name)) {
            if (Hash::check($request->password, $admin->password)) {

                //create token
                $token = $admin->createToken('mobile', ['role:admin'])->plainTextToken;
                //send response
                return response()->json([
                    "status" => 1,
                    "message" => "Admin Logged In Successfully",
                    "token" => $token,
                    "name" => $admin->name,
                    "email" => $admin->email,
                    "password" => $admin->password
                ]);
            } else {

                return response()->json([

                    "status" => 0,
                    "message" => "Password Did Not Match"
                ], 404);
            }


        } else {
            return response()->json([

                "status" => 0,
                "message" => "Invalid Admin"
            ], 404);
        }


    }

    public function profile()
    {
        return response()->json([
            'status' => 1,
            'messsage' => 'Admin info',
            'data' => auth()->user()

        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 1,
            'message' => 'Admin Logout Successfully'
        ]);
    }
}
