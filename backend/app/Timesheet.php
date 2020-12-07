<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
    protected $fillable = ['title', 'hours', 'minutes', 'creator_id', 'project_id', 'mark_private', 'status'];
    protected $hidden = ['creator_id', 'project_id', 'created_at', 'updated_at'];

    function times(){
        return $this->hasMany('App\Time', 'timesheet_id')->with(['creator', 'tasklist', 'task', 'status']);
    }
}
