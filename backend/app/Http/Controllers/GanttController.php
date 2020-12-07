<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\User;
use App\People;
use App\Project;

class GanttController extends Controller
{
    public function projectsTasks(Request $request){        
        $person = $request->user();
        $response = People::find($person->id)->projectsTasks;
        return response($response, 200);
    }    
}
