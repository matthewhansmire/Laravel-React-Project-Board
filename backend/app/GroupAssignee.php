<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupAssignee extends Model
{
    protected $fillable = ['assignee_id', 'group_id'];
    protected $hidden = ['id', 'assignee_id', 'group_id', 'created_at', 'updated_at'];

    function assignee(){
        return $this->belongsTo('App\People', 'assignee_id');
    }
}
