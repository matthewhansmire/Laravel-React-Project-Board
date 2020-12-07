<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubTask extends Model
{
    protected $fillable = ['title', 'desc', 'creator_id', 'task_id', 'stage_id', 'start_date', 'end_date', 'hours', 'minutes'];
    protected $hidden = ['creator_id', 'task_id', 'stage_id'];

    protected $table = 'subtasks';
    
    function assignees(){        
        return $this->belongsToMany('App\People', 'App\SubTaskMatchAssignee', 'subtask_id', 'assignee_id');
    }

    function stage(){
        return $this->belongsTo('App\UserTaskStage', 'stage_id');
    }

    function labels(){
        return $this->belongsToMany('App\UserTaskLabel', 'App\SubTaskMatchLabel', 'subtask_id', 'label_id');
    }    
}
