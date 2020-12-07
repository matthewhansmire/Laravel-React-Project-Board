<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDefaultTaskStage extends Model
{
    protected $fillable = ['name', 'code', 'workflow_id'];
    protected $hidden = ['workflow_id'];

    protected $table = 'user_default_task_stages';
}
