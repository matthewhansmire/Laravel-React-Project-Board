<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    protected $fillable = ['date', 'hours', 'minutes', 'desc', 'creator_id', 'project_id', 'timesheet_id', 'tasklist_id', 'task_id', 'subtask_id', 'status_id'];
    protected $hidden = ['creator_id', 'project_id', 'timesheet_id', 'tasklist_id', 'task_id', 'subtask_id', 'status_id', 'created_at', 'updated_at'];

    function creator(){
        return $this->belongsTo('App\People', 'creator_id');
    }

    function tasklist(){
        return $this->belongsTo('App\Tasklist', 'tasklist_id');
    }

    function task(){
        return $this->belongsTo('App\Task', 'task_id')->with(['stage', 'progress']);
    }

    function status(){
        return $this->belongsTo('App\TimeStatus', 'status_id');
    }
}
