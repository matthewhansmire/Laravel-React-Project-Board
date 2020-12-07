<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SystemConstTaskProgress extends Model
{
    protected $fillable = ['name', 'value'];

    public $timestamps = false;

    protected $table = 'system_const_task_progresses';
}
