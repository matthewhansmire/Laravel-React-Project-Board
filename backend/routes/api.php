<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['json.response']], function(){
    // public routes
    Route::post('/login', 'AuthController@login');
    Route::post('/register','AuthController@register');

    Route::get('/acceptedby', 'AuthController@acceptedBy'); //move to auth route later
});

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'AuthController@logout');

    Route::get('/myprojects', 'MyDataController@myProjects');
    Route::get('/mytasks', 'MyDataController@myTasks');
    Route::get('/myevents', 'MyDataController@myEvents');
    Route::get('/mymilestones', 'MyDataController@myMilestones');
    Route::get('/myactivities', 'MyDataController@myActivities');
    Route::get('/bookmarks', 'MyDataController@bookmarks');
    Route::get('/quickies', 'MyDataController@quickies');

    Route::get('/allprojects', 'ProjectController@allProjects');
    Route::get('/projectcategories', 'ProjectController@projectCategories');
    Route::get('/projectstatuses', 'ProjectController@projectStatuses');
    Route::get('/projectcolors', 'ProjectController@projectColors');
    Route::get('/projectaccessroles', 'ProjectController@projectAccessRoles');
    Route::get('/userpersons', 'ProjectController@userPersons');
    Route::post('/addproject', 'ProjectController@addProject');
    Route::post('/addprojectcategory', 'ProjectController@addProjectCategory');
    Route::post('/addprojectstatus', 'ProjectController@addProjectStatus');
    Route::post('/addprojectassignees', 'ProjectController@addProjectAssignees');    
    Route::get('/projecttemplates', 'ProjectController@projectTemplates');
    Route::post('/addprojecttemplate', 'ProjectController@addProjectTemplate');
    Route::post('/addprojecttemplateassignees', 'ProjectController@addProjectTemplateAssignees');
    Route::get('/projectlabels', 'ProjectController@projectLabels');
    Route::post('/addprojectlabel', 'ProjectController@addProjectLabel');
    
    Route::get('/alltasks', 'TaskController@allTasks');
    Route::get('/tasklists', 'TaskController@tasklists');
    Route::get('/taskliststasks', 'TaskController@tasklistsTasks');
    Route::get('/tasks', 'TaskController@tasks');
    Route::post('/addtask', 'TaskController@addTask'); 
    Route::post('/addtaskassignees', 'TaskController@addTaskAssignees');
    Route::post('/updatetask', 'TaskController@updateTask');
    Route::post('/addsubtask', 'TaskController@addSubTask'); 
    Route::post('/addsubtaskassignees', 'TaskController@addSubTaskAssignees');
    Route::get('/taskprogresses', 'TaskController@taskProgresses');
    Route::get('/tasklabels', 'TaskController@taskLabels');

    Route::get('/allevents', 'CalendarController@allEvents');
    Route::get('/allmilestones', 'CalendarController@allMilestones');
    Route::get('/projectevents', 'CalendarController@projectEvents');
    Route::get('/projectmilestones', 'CalendarController@projectMilestones');

    Route::get('/projectstasks', 'GanttController@projectsTasks');

    Route::get('/projecttimesheets', 'TimeController@projectTimesheets');
    Route::get('/alltimesheets', 'TimeController@allTimesheets');
    Route::get('/tasklisttasks', 'TimeController@tasklistTasks');
    Route::get('/subtasks', 'TimeController@subtasks');
    Route::get('/timestatuses', 'TimeController@timeStatuses');
    Route::post('/addtimesheet', 'TimeController@addTimesheet');
    Route::post('/addtime', 'TimeController@addTime');

    Route::post('/inviteperson', 'MailController@sendInviteEmail');
    
});


