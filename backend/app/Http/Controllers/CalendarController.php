<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\User;
use App\People;
use App\Project;

class CalendarController extends Controller
{
    public function allEvents(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->allEvents;
        return response($response, 200);
    }

    public function allMilestones(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->allMilestones;
        return response($response, 200);
    }    

    public function projectEvents(Request $request){
        $response = Project::find($request->project_id)->events;
        return response($response, 200);
    }

    public function projectMilestones(Request $request){
        $response = Project::find($request->project_id)->milestones;
        return response($response, 200);
    }
}
