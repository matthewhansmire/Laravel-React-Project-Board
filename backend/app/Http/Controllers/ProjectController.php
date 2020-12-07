<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;

use App\User;
use App\People;
use App\Project;
use App\ProjectMatchAssignee;
use App\UserProjectCategory;
use App\UserProjectStatus;
use App\UserProjectAccessRole;
use App\SystemConstProjectColor;

class ProjectController extends Controller
{
    public function allProjects(Request $request){
        $person = $request->user();
        $userPersons = People::find($person->id)->userPersons->toArray();
        $persons = $userPersons['persons'];
        $personIds = array();
        foreach($persons as $person){
            array_push($personIds, $person['id']);
        }

        $response = Project::whereIn('creator_id', $personIds)->with(['manager', 'assignees', 'category', 'status', 'color'])->get();

        return response($response, 200);
    }

    public function projectCategories(Request $request){
        $person = $request->user();        
        $response = People::find($person->id)->projectCategories->toArray();
        $response = $response['project_categories'];
        return response($response, 200);
    }

    public function projectStatuses(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->projectStatuses->toArray();          
        $response = $response['project_statuses'];
        return response($response, 200);
    }
    
    public function projectColors(Request $request){
        $response = SystemConstProjectColor::all();
        return response($response, 200);
    }
    
    public function projectAccessRoles(Request $request){
        $response = UserProjectAccessRole::all();
        return response($response, 200);
    }

    public function userPersons(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->userPersons;        
        return response($response, 200);
    }

    //////////////////////////////////////////////////////////
    public function addProject(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'desc' => 'string|nullable',
            'creator_id' => 'required|integer',
            'start_date' => 'string|nullable',
            'end_date' => 'string|nullable',
            'manager_id' => 'integer|nullable',
            'category_id' => 'integer|nullable',
            'status_id' => 'integer|nullable',
            'color_id' => 'integer|nullable',
            'is_template' => 'required|boolean'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Project::create($request->all());
        return response($response, 200);
    }

    public function addProjectCategory(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'user_id' => 'required|integer'            
        ]);
        
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = UserProjectCategory::create($request->all());
        return response($response, 200);
    }

    public function addProjectStatus(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'user_id' => 'required|integer'            
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = UserProjectStatus::create($request->all());
        return response($response, 200);
    }

    public function addProjectAssignees(Request $request){
        foreach($request->all() as $key => $val){
            $validator = Validator::make($val, [
                'project_id' => 'required|integer',            
                'assignee_id' => 'required|integer'
            ]);
            
            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 400); 
            }
        }            

        $response = ProjectMatchAssignee::insert($request->all());
        return response($response, 200);
    }

    public function addPerson(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string',
            'role' => 'required|string',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = People::create($request->all());
        return response($response, 200);
    }

    /////////////////////////
    public function projectLabels(Request $request){
        $response = Project::find($request->project_id)->labels;          
        return response($response, 200);
    }
    
    public function addProjectLabel(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'code' => 'string|nullable',            
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Label::create($request->all());
        // add ProjectMatchLabel
        return response($response, 200);
    }   
    
}
