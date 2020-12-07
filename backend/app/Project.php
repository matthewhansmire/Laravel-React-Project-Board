<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title', 'desc', 'creator_id', 'manager_id', 'start_date', 'end_date', 'category_id', 'status_id', 'color_id', 'is_template'];

    protected $hidden = ['created_at', 'updated_at'];

    function creator(){
        return $this->belongsTo('App\People', 'creator_id');
    }

    function manager(){
        return $this->belongsTo('App\People', 'manager_id');
    }    

    function assignees(){
        return $this->belongsToMany('App\People', 'App\ProjectMatchAssignee', 'project_id', 'assignee_id');
    }

    function category(){
        return $this->belongsTo('App\UserProjectCategory', 'category_id');
    }

    function status(){
        return $this->belongsTo('App\UserProjectStatus', 'status_id');
    }

    function color(){
        return $this->belongsTo('App\SystemConstProjectColor', 'color_id');
    }

    function tasklists(){
        return $this->hasMany('App\Tasklist', 'project_id');
    }
    
    function tasklistsTasks(){
        return $this->hasMany('App\Tasklist', 'project_id')->with(['workflow', 'tasks']);
    }

    function labels(){
        return $this->belongsToMany('App\UserTaskLabel', 'App\ProjectMatchLabel', 'project_id', 'label_id');
    }

    function tasks(){
        return $this->hasMany('App\Task', 'project_id')->with(['tasklist', 'stage', 'progress', 'subtasks']);
    }

    function events(){
        return $this->hasMany('App\Event', 'project_id');
    }

    function milestones(){
        return $this->hasMany('App\Milestone', 'project_id');
    }

    function timesheets(){
        return $this->hasMany('App\Timesheet', 'project_id')->with(['times']);
    }
}
