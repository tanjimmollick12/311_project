<?php

use App\Http\Controllers\Api\Auth\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/register", [AdminController::class, "register"]);
Route::post("/login", [AdminController::class, "login"]);
Route::middleware(['auth:sanctum', 'type.admin'])->group(function () {
    Route::get("/profile", [AdminController::class, "profile"]);
    Route::get("/logout", [AdminController::class, "logout"]);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
