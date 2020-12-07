import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  ALL_TIMESHEETS,
  PROJECT_TIMESHEETS,
  TASKLIST_TASKS,
  SUBTASKS,
  TIME_STATUSES,

  ADD_TIMESHEET,
  ADD_TIME
} from "./actionTypes";

import {
  getAllTimesheetsSuccess, getAllTimesheetsError,
  getProjectTimesheetsSuccess, getProjectTimesheetsError,
  getTasklistTasksSuccess, getTasklistTasksError,
  getSubtasksSuccess, getSubtasksError,
  getTimeStatusesSuccess, getTimeStatusesError,

  addTimesheetSuccess, addTimesheetError,
  addTimeSuccess, addTimeError
} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllTimesheets() {
  try {
    const response = yield call(fetchData, '/alltimesheets');
    yield put(getAllTimesheetsSuccess(response));
  } catch (error) {
    console.log('get all timesheets error', error);
    yield put(getAllTimesheetsError(error));
  }
}

function* getProjectTimesheets({ payload }) {
  try {
    const response = yield call(fetchData, '/projecttimesheets', payload);
    yield put(getProjectTimesheetsSuccess(response));
  } catch (error) {
    console.log('get project timesheets error', error);
    yield put(getProjectTimesheetsError(error));
  }
}

function* getTasklistTasks({ payload }) {
  try {
    const response = yield call(fetchData, '/tasklisttasks', payload);
    yield put(getTasklistTasksSuccess(response));
  } catch (error) {
    console.log('get tasklist tasks error', error);
    yield put(getTasklistTasksError(error));
  }
}

function* getSubtasks({ payload }) {
  try {
    const response = yield call(fetchData, '/subtasks', payload);
    yield put(getSubtasksSuccess(response));
  } catch (error) {
    console.log('get subtasks error', error);
    yield put(getSubtasksError(error));
  }
}

function* getTimeStatuses() {
  try {
    const response = yield call(fetchData, '/timestatuses');
    yield put(getTimeStatusesSuccess(response));
  } catch (error) {
    console.log('get time statuses error', error);
    yield put(getTimeStatusesError(error));
  }
}


function* addTimesheet({payload}) {
  try {    
    const response = yield call(postData, '/addtimesheet', payload);    
    yield put(addTimesheetSuccess(response));
  } catch (error) {
    console.log('add timesheet error', error);
    yield put(addTimesheetError(error));
  }
}

function* addTime({payload}) {
  try {    
    const response = yield call(postData, '/addtime', payload);    
    yield put(addTimeSuccess(response));
  } catch (error) {
    console.log('add time error', error);
    yield put(addTimeError(error));
  }
}


export function* watchGetAllTimesheets() {
  yield takeEvery(ALL_TIMESHEETS, getAllTimesheets);
}

export function* watchGetProjectTimesheets() {
  yield takeEvery(PROJECT_TIMESHEETS, getProjectTimesheets);
}

export function* watchGetTasklistTasks() {
  yield takeEvery(TASKLIST_TASKS, getTasklistTasks);
}

export function* watchGetSubtasks() {
  yield takeEvery(SUBTASKS, getSubtasks);
}

export function* watchGetTimeStatuses(){
  yield takeEvery(TIME_STATUSES, getTimeStatuses);
}

export function* watchAddTime() {
  yield takeEvery(ADD_TIME, addTime);
}

export function* watchAddTimesheet() {
  yield takeEvery(ADD_TIMESHEET, addTimesheet);
}

function* TimeSaga() {
  yield all([
    fork(watchGetAllTimesheets),
    fork(watchGetProjectTimesheets),
    fork(watchGetTasklistTasks),
    fork(watchGetSubtasks),
    fork(watchGetTimeStatuses),

    fork(watchAddTimesheet),
    fork(watchAddTime)
  ]);
}

export default TimeSaga;
