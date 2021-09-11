<?php


use App\Http\Controllers\Api\Auth\AdminController;
use App\Http\Controllers\Api\Auth\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ReviewController;
//admin
Route::post("/register", [AdminController::class, "register"]);
Route::post("/login", [AdminController::class, "login"]);
Route::middleware(['auth:sanctum', 'type.admin'])->group(function () {
    Route::get("/profile", [AdminController::class, "profile"]);
    Route::get("/logout", [AdminController::class, "logout"]);
    Route::post('/addproduct',[ProductController::class,"AddProduct"]);
    Route::post('/addprodimg/{id}',[ProductController::class,"AddProdImage"]);
    Route::put('/updateproduct/{id}',[ProductController::class,"updateProduct"]);
    Route::get('/products',[ProductController::class,"prodTable"]);
    Route::get('/orders',[OrderController::class,"orderTable"]);
    Route::get("/customers", [CustomerController::class, "customerTable"]);

    Route::post('/deliveried/{id}',[OrderController::class,"DelStatus"]);
    Route::post('/paid/{id}',[OrderController::class,"PayStatus"]);

});
Route::get('/product/{id}',[ProductController::class,"productDetails"]);
Route::get('/productlist',[ProductController::class,"productList"]);

//customer
Route::post("/signup", [CustomerController::class, "signUp"]);
Route::post("/signin", [CustomerController::class, "signIn"]);
Route::middleware(['auth:sanctum', 'type.customer'])->group(function () {
    Route::get("/profile/", [CustomerController::class, "profile"]);
    Route::get("/logout", [CustomerController::class, "logout"]);
    Route::put("/update", [CustomerController::class, "update"]);
    Route::delete("/delete", [CustomerController::class, "delete"]);
    Route::post("/upimage", [CustomerController::class, "upImage"]);
    Route::post("/order/{id}", [OrderController::class, "CreateOrder"]);
    Route::post("/review/{id}", [ReviewController::class, "GiveReview"]);


});


