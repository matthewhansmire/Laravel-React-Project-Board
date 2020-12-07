<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;  

    protected $fillable = ['name', 'email', 'password', 'photo', 'domain', 'role'];    

    protected $hidden = ['password', 'created_at', 'updated_at'];
    
    function persons(){
        return $this->hasMany('App\People', 'user_id');
    }

    function projectCategories(){
        return $this->hasMany('App\UserProjectCategory', 'user_id');
    }

    function projectStatuses(){
        return $this->hasMany('App\UserProjectStatus', 'user_id');
    }
}
