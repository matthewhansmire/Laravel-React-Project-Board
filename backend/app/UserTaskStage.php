<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTaskStage extends Model
{
    protected $fillable = ['name', 'user_id', 'workflow_id', 'type'];
    protected $hidden = ['user_id', 'workflow_id'];

    protected $table = 'user_task_stages';
}
