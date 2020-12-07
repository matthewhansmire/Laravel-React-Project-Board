<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTaskLabel extends Model
{
    protected $fillable = ['name', 'code', 'user_id', 'type'];
    protected $hidden = ['user_id'];

    protected $table = 'user_task_labels';
}
