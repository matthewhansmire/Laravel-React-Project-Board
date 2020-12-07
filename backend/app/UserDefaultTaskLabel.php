<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultTaskLabel extends Model
{
    protected $fillable = ['name', 'code'];

    protected $table = 'user_default_task_labels';
}
