<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['title', 'desc', 'date', 'creator_id', 'project_id', 'timezone_id', 'reminder_id'];
    protected $hidden = ['creator_id', 'project_id', 'timezone_id', 'reminder_id', 'created_at', 'updated_at'];

    function project(){
        return $this->belongsTo('App\Project', 'project_id');
    }

    function timezone(){
        return $this->belongsTo('App\Timezone', 'timezone_id');
    }

    function reminder(){
        return $this->belongsTo('App\Reminder', 'reminder_id');
    }
}
