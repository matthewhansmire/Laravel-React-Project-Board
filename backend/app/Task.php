<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'desc', 'creator_id', 'project_id', 'tasklist_id', 'stage_id', 'start_date', 'end_date', 'hours', 'minutes', 'progress_id', 'repeat_id'];
    protected $hidden = ['creator_id', 'project_id', 'tasklist_id', 'stage_id', 'progress_id'];

    function project(){
        return $this->belongsTo('App\Project', 'project_id')->with(['color']);
    }

    function tasklist(){
        return $this->belongsTo('App\Tasklist', 'tasklist_id')->with(['workflow']);
    }

    function assignees(){
        // return $this->hasMany('App\TaskMatchAssignee', 'task_id')->with(['assignee', 'stage']);
        return $this->belongsToMany('App\People', 'App\TaskMatchAssignee', 'task_id', 'assignee_id');
    }

    function progress(){
        return $this->belongsTo('App\SystemConstTaskProgress', 'progress_id');
    }

    function stage(){
        return $this->belongsTo('App\UserTaskStage', 'stage_id');
    }

    function labels(){
        return $this->belongsToMany('App\UserTaskLabel', 'App\TaskMatchLabel', 'task_id', 'label_id');
    }

    function subtasks(){
        return $this->hasMany('App\SubTask', 'task_id')->with(['labels']);
    }
}
