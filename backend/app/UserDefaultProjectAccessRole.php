<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultProjectAccessRole extends Model
{
    protected $fillable = ['name'];

    protected $table = 'user_default_project_access_roles';
}
