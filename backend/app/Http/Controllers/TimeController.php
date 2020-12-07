<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\User;
use App\People;
use App\Project;
use App\Tasklist;
use App\Task;
use App\Timesheet;
use App\Time;
use App\TimeStatus;

class TimeController extends Controller
{
    public function allTimesheets(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->allTimesheets;
        return response($response, 200);
    }

    public function projectTimesheets(Request $request){
        $response = Project::find($request->project_id)->timesheets;          
        return response($response, 200);        
    }

    public function tasklistTasks(Request $request){
        $response = Tasklist::find($request->tasklist_id)->tasks;
        return response($response, 200);
    }

    public function subtasks(Request $request){
        $response = Task::find($request->task_id)->subtasks;        
        return response($response, 200);
    }

    public function timeStatuses(Request $request){
        $response = TimeStatus::all();
        return response($response, 200);
    }


    public function addTimesheet(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'hours' => 'integer|nullable',
            'minutes' => 'integer|nullable',
            'creator_id' => 'required|integer',
            'project_id' => 'required|integer',
            'status' => 'string|nullable'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Timesheet::create($request->all());
        return response($response, 200);
    }
    
    public function addTime(Request $request){
        $validator = Validator::make($request->all(), [
            'date' => 'required|string',
            'hours' => 'required|integer',
            'minutes' => 'integer|nullable',
            'desc' => 'string|nullable',
            'creator_id' => 'required|integer',
            'project_id' => 'required|integer',
            'timesheet_id' => 'required|integer',
            'tasklist_id' => 'integer|nullable',
            'task_id' => 'integer|nullable',
            'subtask_id' => 'integer|nullable',
            'status_id' => 'required|integer'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Time::create($request->all());
        return response($response, 200);
    }

}
