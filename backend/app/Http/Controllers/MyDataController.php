<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illumicate\Support\Facades\AUth;
use Illuminate\Support\Facades\Log;

use App\User;
use App\People;
use App\Project;
use App\ProjectMatchAssignee;
use App\Task;

class MyDataController extends Controller
{
    public function index(Request $request) {
        $response = 'index';
        return response($response, 200);
    } 

    public function profile(Request $request){        
        $response = 'profile';
        return response($response, 200);
    }

    public function myProjects(Request $request){
        $person = $request->user();        
        $response = People::find($person->id)->myProjects;                  
        return response($response, 200);
    }

    public function myTasks(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->myTasks;
        return response($response, 200);
    }

    public function myEvents(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->myEvents;
        return response($response, 200);
    }

    public function myMilestones(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->myMilestones;
        return response($response, 200);
    }

    public function myActivities(Request $request){
        $person = $request->user();
        $response = People::find($person->id)->myActivities;
        return response($response, 200);
    }

    public function bookmarks(Request $request){

        $response = 'bookmarks';
        return response($response, 200);
    }

    public function quickies(Request $request){

        $response = 'quickies';
        return response($response, 200);
    }

    public function getAnnouncements(){

    }
    public function setAnnouncements(){

    }
}
