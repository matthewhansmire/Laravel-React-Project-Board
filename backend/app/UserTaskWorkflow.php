<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTaskWorkflow extends Model
{
    protected $fillable = ['name', 'user_id', 'type'];
    protected $hidden = ['user_id'];

    protected $table = 'user_task_workflows';

    function stages(){
        return $this->hasMany('App\UserTaskStage', 'workflow_id');
    }    
}
