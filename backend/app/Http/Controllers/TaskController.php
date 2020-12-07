<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\User;
use App\People;
use App\Project;
use App\Task;
use App\TaskMatchAssignee;
use App\UserTaskLabel;
use App\SubTask;
use App\SubTaskMatchAssignee;
use App\SystemConstTaskProgress;

class TaskController extends Controller
{
    public function taskProgresses(Request $request){
        $response = SystemConstTaskProgress::all();
        return response($response, 200);
    }

    public function taskLabels(Request $request){
        $person = $request->user();
        $user_id = People::find($person->id)->user_id;
        $response = UserTaskLabel::where('user_id', $user_id)->get();
        return response($response, 200);
    }


    public function allTasks(Request $request){
        $person = $request->user();
        $userPersons = People::find($person->id)->userPersons->toArray();
        $persons = $userPersons['persons'];
        $personIds = array();
        foreach($persons as $person){
            array_push($personIds, $person['id']);
        }

        $response = Task::whereIn('creator_id', $personIds)->with(['project', 'tasklist', 'stage', 'assignees', 'labels', 'progress'])->get();

        return response($response, 200);
    }

    public function tasklists(Request $request){
        $response = Project::find($request->project_id)->tasklists;
        return response($response, 200);
    }

    public function tasklistsTasks(Request $request){        
        $response = Project::find($request->project_id)->tasklistsTasks;
        return response($response, 200);
    }

    public function tasks(Request $request){        
        $response = Project::find($request->project_id)->tasks;
        return response($response, 200);
    }

    public function addTask(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'desc' => 'string|nullable',
            'creator_id' => 'required|integer',
            'start_date' => 'string|nullable',
            'end_date' => 'string|nullable',
            'hours' => 'integer|nullable',
            'minutes' => 'integer|nullable',
            'project_id' => 'required|integer',
            'tasklist_id' => 'required|integer',
            'stage_id' => 'integer|nullable',
            'repeat_id' => 'integer|nullable',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Task::create($request->all());
        return response($response, 200);
    }

    public function addTaskAssignees(Request $request){
        foreach($request->all() as $key => $val){
            $validator = Validator::make($val, [
                'task_id' => 'required|integer',
                'assignee_id' => 'required|integer',
                'stage_id' => 'integer|nullable'            
            ]);
            
            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 400); 
            }
        }            

        $response = TaskMatchAssignee::insert($request->all());
        return response($response, 200);
    }

    public function updateTask(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'title' => 'required|string',
            'desc' => 'string|nullable',            
            'start_date' => 'string|nullable',
            'end_date' => 'string|nullable',
            'hours' => 'integer|nullable',
            'minutes' => 'integer|nullable',            
            'stage_id' => 'integer|nullable',
            'repeat_id' => 'integer|nullable',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Task::find($request->id)->update($request->all());
        return response($response, 200);
    }

    public function addSubTask(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'desc' => 'string|nullable',
            'creator_id' => 'required|integer',
            'task_id' => 'required|integer',
            'stage_id' => 'integer|nullable',
            'start_date' => 'string|nullable',
            'end_date' => 'string|nullable',
            'hours' => 'integer|nullable',
            'minutes' => 'integer|nullable',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = SubTask::create($request->all());
        return response($response, 200);
    }

    public function addSubTaskAssignees(Request $request){
        foreach($request->all() as $key => $val){
            $validator = Validator::make($val, [
                'subtask_id' => 'required|integer',
                'assignee_id' => 'required|integer',
                'stage_id' => 'integer|nullable'            
            ]);
            
            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 400); 
            }
        }            

        $response = SubTaskMatchAssignee::insert($request->all());
        return response($response, 200);
    }    
    
}
