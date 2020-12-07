<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SystemConstProjectColor extends Model
{
    protected $fillable = ['name', 'code'];

    public $timestamps = false;

    protected $table = 'system_const_project_colors';
}
