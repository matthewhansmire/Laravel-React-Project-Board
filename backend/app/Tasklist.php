<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tasklist extends Model
{
    protected $fillable = ['name', 'project_id', 'workflow_id'];
    protected $hidden = ['project_id', 'workflow_id', 'created_at', 'updated_at'];

    function workflow(){
        return $this->belongsTo('App\UserTaskWorkflow', 'workflow_id')->with(['stages']);
    }    

    function tasks(){
        return $this->hasMany('App\Task', 'tasklist_id')->with(['project', 'tasklist', 'stage', 'labels', 'assignees', 'progress', 'subtasks']);
    }
}
