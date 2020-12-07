<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultTaskWorkflow extends Model
{
    protected $fillable = ['name'];

    protected $table = 'user_default_task_workflows';
}
