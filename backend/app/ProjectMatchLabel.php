<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectMatchLabel extends Model
{
    protected $fillable = ['project_id', 'label_id'];
    protected $hidden = ['id', 'project_id', 'label_id', 'created_at', 'updated_at'];

    protected $table = 'projects_match_labels';     
}
