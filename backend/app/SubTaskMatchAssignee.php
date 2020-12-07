<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubTaskMatchAssignee extends Model
{
    protected $fillable = ['subtask_id', 'assignee_id', 'stage_id'];
    protected $hidden = ['id', 'subtask_id', 'assignee_id', 'stage_id', 'created_at', 'updated_at'];
 
    protected $table = 'subtasks_match_assignees';     

    function assignee(){
        return $this->belongsTo('App\People', 'assignee_id');
    }    
}
