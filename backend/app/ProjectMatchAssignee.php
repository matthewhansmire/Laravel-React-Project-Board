<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectMatchAssignee extends Model
{
    protected $fillable = ['project_id', 'assignee_id'];
    protected $hidden = ['id', 'project_id', 'assignee_id', 'created_at', 'updated_at'];

    protected $table = 'projects_match_assignees';     
}
