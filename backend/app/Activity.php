<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = ['act_kind', 'act', 'act_detail', 'creator_id', 'act_kind_id'];
    protected $hidden = ['id', 'creator_id', 'act_kind_id'];

    function creator(){
        return $this->belongsTo('App\People', 'creator_id');
    }
    
    // function act_kind(){
    //     $this->belongsTo('App\ActKind', 'act_kind_id')        
    // }
}
