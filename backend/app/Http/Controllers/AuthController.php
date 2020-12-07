<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use URL;

use App\User;
use App\People;
use App\UserDefaultProjectAccessRole;
use App\UserDefaultProjectCategory;
use App\UserDefaultProjectStatus;
use App\UserDefaultTaskWorkflow;
use App\UserDefaultTaskStage;
use App\UserDefaultTaskLabel;

use App\UserProjectAccessRole;
use App\UserProjectCategory;
use App\UserProjectStatus;
use App\UserTaskWorkflow;
use App\UserTaskStage;
use App\UserTaskLabel;

class AuthController extends Controller
{    
    public function login (Request $request) {
        // $url = parse_url(URL::all());
        // $domain = explode('.', $url['host']);
        // $subdomain = $domain[0];
        // $name = DB::table('users')->where('sub_domain', $subdomain)->get();
        // dd($name);
        // return response($name, 200);
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 401); //402?
        }

        // $user = User::where('email', $request->email)->first();
        $person = People::where('email', $request->email)->with('user')->first();// remove first and login in user account        

        if ($person) {
            if (Hash::check($request->password, $person->password)) {
                $token = $person->createToken('Laravel Password Grant Client')->accessToken;
                $response = [
                    'token' => $token,
                    'person' => $person
                ];
                return response($response, 200);
            } else {
                $response = ["message" => "Password mismatch"];
                return response($response, 421);
            }
        } else {
            $response = ["message" =>'User does not exist'];
            return response($response, 422);
        }
    }

    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];        
        return response($response, 200);
    }

    public function register (Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 401); //402?
        }
        
        $request['password']=Hash::make($request['password']);
        
        $user = User::create($request->toArray());
        
        ///////default entry//////
        $this->defaultEntry($user);
        //////////////////////////

        $person = People::create(array(
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'user_id' => $user->id,           
        ));
        
        // $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $token = $person->createToken('Laravel Password Grant Client')->accessToken;

        $response = ['token' => $token];
        Log::debug($response);
        return response($response, 200);
    } 

    public function defaultEntry($user){
        $projectAccessRoles = UserDefaultProjectAccessRole::all();
        $projectAccessRolesEntries = array();
        foreach($projectAccessRoles as $projectAccessRole){
            $record = array(
                'name' => $projectAccessRole->name,
                'user_id' => $user->id
            );
            array_push($projectAccessRolesEntries, $record);
        }
        UserProjectAccessRole::insert($projectAccessRolesEntries);

        $projectCategories = UserDefaultProjectCategory::all();
        $projectCategoriesEntries = array();
        foreach($projectCategories as $projectCategory){
            $record = array(
                'name' => $projectCategory->name,
                'user_id' => $user->id
            );
            array_push($projectCategoriesEntries, $record);
        }
        UserProjectCategory::insert($projectCategoriesEntries);

        $projectStatuses = UserDefaultProjectStatus::all();
        $projectStatusesEntries = array();
        foreach($projectStatuses as $projectStatus){
            $record = array(
                'name' => $projectStatus->name,
                'user_id' => $user->id
            );
            array_push($projectStatusesEntries, $record);
        }
        UserProjectStatus::insert($projectStatusesEntries);

        $tasklistWorkflows = UserDefaultTaskWorkflow::all();
        $tasklistWorkflowsEntries = array();
        foreach($tasklistWorkflows as $tasklistWorkflow){
            $record = array(
                'name' => $tasklistWorkflow->name,
                'user_id' => $user->id,
                'type' => 'Default'
            );
            array_push($tasklistWorkflowsEntries, $record);
        }
        UserTaskWorkflow::insert($tasklistWorkflowsEntries);

        $addedUserTaskWorkflows = UserTaskWorkflow::where('user_id', $user->id)->get();
        $tasklistStages = UserDefaultTaskStage::all();
        $tasklistStagesEntries = array();
        foreach($tasklistStages as $tasklistStage){
            $record = array(
                'name' => $tasklistStage->name,
                'user_id' => $user->id,
                'workflow_id' => $addedUserTaskWorkflows[$tasklistStage->workflow_id - 1]->id,
                'type' => 'Default'
            );
            array_push($tasklistStagesEntries, $record);
        }
        UserTaskStage::insert($tasklistStagesEntries);

        $taskLabels = UserDefaultTaskLabel::all();
        $taskLabelsEntries = array();
        foreach($taskLabels as $taskLabel){
            $record = array(
                'name' => $taskLabel->name,
                'code' => $taskLabel->code,
                'user_id' => $user->id,
                'type' => 'Default'
            );
            array_push($taskLabelsEntries, $record);
        }
        UserTaskLabel::insert($taskLabelsEntries);
    }

    public function acceptedBy(Request $request){   
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'user_id' => 'required|integer'            
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 401); //402?
        }

        $existedPerson = DB::table('people')->where([
            ['email', '=', $request->email],
            ['user_id', '=', $request->user_id]
        ])->get();

        if($existedPerson->isEmpty()){
            $person = People::create(array(
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'user_id' => $request->user_id,           
                'role_id' => $request->role_id,           
                'language_id' => $request->language_id,           
                'timezone_id' => $request->timezone_id,           
                'title' => $request->title,           
            ));
    
            $appHost = env('APP_URL', '');
            return redirect($appHost.'/autologin/'.$request->email.'/'.$request->password);
        }
        else{
            return response('Email has already been taken.', 200);
        }
    }

    public function profile(Request $request){
        $user = $request->user();
        $response = $user;
        return response($response, 200);
    }

    
}
