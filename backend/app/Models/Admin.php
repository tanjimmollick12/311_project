<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Admin extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, HasApiTokens,Notifiable;

    protected $table = 'admin';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'email',
        'email_verify',
        'password',
        'phone'
    ];
}
