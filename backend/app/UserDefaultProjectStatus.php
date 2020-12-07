<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultProjectStatus extends Model
{
    protected $fillable = ['name'];

    protected $table = 'user_default_project_statuses';
}
