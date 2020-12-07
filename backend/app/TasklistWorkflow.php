<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TasklistWorkflow extends Model
{
    protected $fillable = ['name'];
    
    protected $table = 'tasklist_workflows';
}
