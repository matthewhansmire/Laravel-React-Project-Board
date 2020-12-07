<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskMatchAssignee extends Model
{
    protected $fillable = ['task_id', 'assignee_id', 'stage_id'];
    protected $hidden = ['id', 'task_id', 'assignee_id', 'stage_id', 'created_at', 'updated_at'];
 
    protected $table = 'tasks_match_assignees';     

    function assignee(){
        return $this->belongsTo('App\People', 'assignee_id');
    }

    function stage(){
        return $this->belongsTo('App\UserTaskStage', 'stage_id');
    }
}
