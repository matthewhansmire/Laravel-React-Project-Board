<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Model;

class People extends Authenticatable
{
    use HasApiTokens, Notifiable;  

    protected $fillable = ['name', 'email', 'password', 'photo', 'user_id', 'role_id', 'language_id', 'timezone_id', 'title', 'status'];    

    protected $hidden = ['password', 'user_id', 'role_id', 'language_id', 'timezone_id', 'created_at', 'updated_at'];

    function myProjects(){        
        return $this->hasMany('App\Project', 'creator_id')->with(['creator', 'manager', 'assignees', 'category', 'status', 'color']);
    }
    
    function myTasks(){
        return $this->hasMany('App\Task', 'creator_id')->with(['project', 'tasklist', 'assignees']);
    }

    function myEvents(){
        return $this->hasMany('App\Event', 'creator_id')->with(['project', 'timezone', 'reminder']);
    }

    function myMilestones(){
        return $this->hasMany('App\Milestone', 'creator_id')->with(['project', 'tasklist', 'timezone', 'reminder']);
    }

    function myActivities(){
        // return $this->hasMany('App\Activity', 'creator_id')->with(['act_kind']);
        return $this->hasMany('App\Activity', 'creator_id');
    }

    function user(){
        return $this->belongsTo('App\User', 'user_id');
    }    

    function userPersons(){
        return $this->belongsTo('App\User', 'user_id')->with('persons');
    }    

    function projectCategories(){
        return $this->belongsTo('App\User', 'user_id')->with('projectCategories');
    }

    function projectStatuses(){
        return $this->belongsTo('App\User', 'user_id')->with('projectStatuses');
    }
    
    function allEvents(){
        return $this->hasManyThrough('App\Event', 'App\Project', 'creator_id', 'project_id', 'id')->with(['project']);
    }

    function allMilestones(){
        return $this->hasManyThrough('App\Milestone', 'App\Project', 'creator_id', 'project_id', 'id')->with(['project', 'tasklist']);
    }

    function projectsTasks(){
        return $this->hasMany('App\Project', 'creator_id')->with(['tasks']);
    }

    function allTimesheets(){
        return $this->hasMany('App\Project', 'creator_id')->with(['timesheets']);
    }
}
