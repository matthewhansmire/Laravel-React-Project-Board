<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskMatchLabel extends Model
{
    protected $fillable = ['task_id', 'label_id'];
    protected $hidden = ['id', 'task_id', 'label_id', 'created_at', 'updated_at'];

    protected $table = 'tasks_match_labels';     
}
