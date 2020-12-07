import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  ALL_TASKS,
  TASKLISTS,
  TASKS,
  TASKLISTS_TASKS,

	ADD_TASK,
  ADD_TASK_ASSIGNEES,
  UPDATE_TASK,

	ADD_SUB_TASK,
  ADD_SUB_TASK_ASSIGNEES,
  
  TASK_PROGRESSES,
  TASK_LABELS
} from "./actionTypes";

import {
  getAllTasksSuccess, getAllTasksError,
  getTasklistsSuccess, getTasklistsError,
  getTasksSuccess, getTasksError,
  getTasklistsTasksSuccess, getTasklistsTasksError,

  addTaskSuccess, addTaskError,
  addTaskAssigneesSuccess, addTaskAssigneesError,
  updateTaskSuccess, updateTaskError,

  addSubTaskSuccess, addSubTaskError,
  addSubTaskAssigneesSuccess, addSubTaskAssigneesError,
  	
  getTaskProgressesSuccess, getTaskProgressesError,
  getTaskLabelsSuccess, getTaskLabelsError
} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllTasks() {
  try {
		const response = yield call(fetchData, '/alltasks');		
    yield put(getAllTasksSuccess(response));
  } catch (error) {
    console.log('get all tasks error', error);
    yield put(getAllTasksError(error));
  }
}

function* getTasklists({payload}){
	try{
		const response = yield call(fetchData, '/tasklists', payload);
		yield put(getTasklistsSuccess(response));
	}
	catch(error){
		console.log('get tasklists error', error);
		yield put(getTasklistsError(error));
	}
}

function* getTasks({payload}) {
  try {
    const response = yield call(fetchData, '/tasks', payload);
    yield put(getTasksSuccess(response));
  } catch (error) {
    console.log('get tasks error', error);
    yield put(getTasksError(error));
  }
}

function* getTasklistsTasks({payload}){
	try{
		const response = yield call(fetchData, '/taskliststasks', payload);
		yield put(getTasklistsTasksSuccess(response));
	}
	catch(error){
		console.log('get tasklists tasks error', error);
		yield put(getTasklistsTasksError(error));
	}
}

function* addTask({payload}) {
  try {    
    const response = yield call(postData, '/addtask', payload);    
    yield put(addTaskSuccess(response));
  } catch (error) {
    console.log('add task error', error);
    yield put(addTaskError(error));
  }
}

function* addTaskAssignees({payload}) {
  try {
    const response = yield call(postData, '/addtaskassignees', payload.assignees);
    yield put(addTaskAssigneesSuccess(response));
  } catch (error) {
    console.log('add task assignees error', error);
    yield put(addTaskAssigneesError(error));
  }
}

function* updateTask({payload}) {
  try {    
    const response = yield call(postData, '/updatetask', payload);    
    yield put(updateTaskSuccess(response));
  } catch (error) {
    console.log('update task error', error);
    yield put(updateTaskError(error));
  }
}

function* addSubTask({payload}) {
  try {    
    const response = yield call(postData, '/addsubtask', payload);    
    yield put(addSubTaskSuccess(response));
  } catch (error) {
    console.log('add subtask error', error);
    yield put(addSubTaskError(error));
  }
}

function* addSubTaskAssignees({payload}) {
  try {
    const response = yield call(postData, '/addsubtaskassignees', payload.assignees);
    yield put(addSubTaskAssigneesSuccess(response));
  } catch (error) {
    console.log('add subtask assignees error', error);
    yield put(addSubTaskAssigneesError(error));
  }
}

function* getTaskProgresses() {
  try {
    const response = yield call(fetchData, '/taskprogresses');
    yield put(getTaskProgressesSuccess(response));
  } catch (error) {
    console.log('get task progresses error', error);
    yield put(getTaskProgressesError(error));
  }
}

function* getTaskLabels() {
  try {
    const response = yield call(fetchData, '/tasklabels');
    yield put(getTaskLabelsSuccess(response));
  } catch (error) {
    console.log('get task labels error', error);
    yield put(getTaskLabelsError(error));
  }
}

export function* watchGetAllTasks() {
  yield takeEvery(ALL_TASKS, getAllTasks);
}

export function* watchGetTasklists(){
	yield takeEvery(TASKLISTS, getTasklists);
}

export function* watchGetTasks(){
  yield takeEvery(TASKS, getTasks);
}

export function* watchGetTasklistsTasks(){
	yield takeEvery(TASKLISTS_TASKS, getTasklistsTasks);
}

export function* watchAddTask() {
  yield takeEvery(ADD_TASK, addTask);
}

export function* watchAddTaskAssignees() {
  yield takeEvery(ADD_TASK_ASSIGNEES, addTaskAssignees);
}

export function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK, updateTask);
}

export function* watchAddSubTask() {
  yield takeEvery(ADD_SUB_TASK, addSubTask);
}

export function* watchAddSubTaskAssignees() {
  yield takeEvery(ADD_SUB_TASK_ASSIGNEES, addSubTaskAssignees);
}

export function* watchGetTaskProgresses(){
  yield takeEvery(TASK_PROGRESSES, getTaskProgresses);
}

export function* watchGetTaskLabels(){
  yield takeEvery(TASK_LABELS, getTaskLabels);
}


function* TaskSaga() {
	yield all([
    fork(watchGetAllTasks),
    fork(watchGetTasklists),
    fork(watchGetTasks),
    fork(watchGetTasklistsTasks),
		fork(watchAddTask),
    fork(watchAddTaskAssignees),
    fork(watchUpdateTask),
		fork(watchAddSubTask),
		fork(watchAddSubTaskAssignees),    
    fork(watchGetTaskProgresses),
    fork(watchGetTaskLabels),
	]);
}

export default TaskSaga;
