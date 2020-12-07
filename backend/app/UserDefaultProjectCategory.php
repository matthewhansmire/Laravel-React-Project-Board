<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultProjectCategory extends Model
{
    protected $fillable = ['name'];

    protected $table = 'user_default_project_categories';
}
