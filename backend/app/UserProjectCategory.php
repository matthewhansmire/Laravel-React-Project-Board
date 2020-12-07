<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserProjectCategory extends Model
{
    protected $fillable = ['name', 'user_id'];
    protected $hidden = ['user_id'];

    protected $table = 'user_project_categories';
}
