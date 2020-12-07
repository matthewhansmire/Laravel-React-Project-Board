import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  ALL_EVENTS,
  ALL_MILESTONES,
  PROJECT_EVENTS,
  PROJECT_MILESTONES
} from "./actionTypes";

import {
	getAllEventsSuccess, getAllEventsError,
  getAllMilestonesSuccess, getAllMilestonesError,
  getProjectEventsSuccess, getProjectEventsError,
  getProjectMilestonesSuccess, getProjectMilestonesError
} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllEvents() {
  try {
    const response = yield call(fetchData, '/allevents');
    yield put(getAllEventsSuccess(response));
  } catch (error) {
    console.log('get all events error', error);
    yield put(getAllEventsError(error));
  }
}

function* getAllMilestones() {
  try {
    const response = yield call(fetchData, '/allmilestones');
    yield put(getAllMilestonesSuccess(response));
  } catch (error) {
    console.log('get all milestones error', error);
    yield put(getAllMilestonesError(error));
  }
}

function* getProjectEvents({payload}) {
  try {
    const response = yield call(fetchData, '/projectevents', payload);
    yield put(getProjectEventsSuccess(response));
  } catch (error) {
    console.log('get project events error', error);
    yield put(getProjectEventsError(error));
  }
}

function* getProjectMilestones({payload}) {
  try {
    const response = yield call(fetchData, '/projectmilestones', payload);
    yield put(getProjectMilestonesSuccess(response));
  } catch (error) {
    console.log('get project milestones error', error);
    yield put(getProjectMilestonesError(error));
  }
}


export function* watchGetAllEvents() {
  yield takeEvery(ALL_EVENTS, getAllEvents);
}

export function* watchGetAllMilestones() {
  yield takeEvery(ALL_MILESTONES, getAllMilestones);
}

export function* watchGetProjectEvents(){
  yield takeEvery(PROJECT_EVENTS, getProjectEvents);
}

export function* watchGetProjectMilestones(){
  yield takeEvery(PROJECT_MILESTONES, getProjectMilestones);
}

function* CalendarSaga() {
	yield all([
		fork(watchGetAllEvents),
    fork(watchGetAllMilestones),    
    fork(watchGetProjectEvents),
    fork(watchGetProjectMilestones)
	]);
}

export default CalendarSaga;
