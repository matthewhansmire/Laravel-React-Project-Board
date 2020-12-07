<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubTaskMatchLabel extends Model
{
    protected $fillable = ['subtask_id', 'label_id'];
    protected $hidden = ['id', 'subtask_id', 'label_id', 'created_at', 'updated_at'];

    protected $table = 'subtasks_match_labels';     
}
