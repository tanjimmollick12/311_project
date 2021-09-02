<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Admin extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $table = 'admin';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone'
    ];
}
