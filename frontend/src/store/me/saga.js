// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import { 
  MY_PROJECTS,
  MY_TASKS,
  MY_EVENTS,
  MY_MILESTONES,
  MY_ACTIVITIES,
  MY_CALENDAR,
  BOOKMARKS,
  QUICKIES,
} from './actionTypes';

import {
	getMyProjectsSuccess, getMyProjectsError,
  getMyTasksSuccess, getMyTasksError, 
  getMyEventsSuccess, getMyEventsError,
  getMyMilestonesSuccess, getMyMilestonesError,
  getMyCalendarSuccess, getMyCalendarError,
  getMyActivitiesSuccess, getMyActivitiesError,
  getBookmarksSuccess, getBookmarksError,
  getQuickiesSuccess, getQuickiesError
} from './actions';

import {
  fetchData,
} from '../../service/fetch';

function* getMyProjects() {
  try {
      const response = yield call(fetchData, '/myprojects');
      yield put(getMyProjectsSuccess(response));
  } catch (error) {
    	console.log('get my projects error', error);
      yield put(getMyProjectsError(error));
  }
}

function* getMyTasks() {
  try {
      const response = yield call(fetchData, '/mytasks');
      yield put(getMyTasksSuccess(response));
  } catch (error) {
    	console.log('get my tasks error', error);
      yield put(getMyTasksError(error));
  }
}

function* getMyEvents() {
  try {
      const response = yield call(fetchData, '/myevents');
      yield put(getMyEventsSuccess(response));
  } catch (error) {
    	console.log('get my events error', error);
      yield put(getMyEventsError(error));
  }
}

function* getMyMilestones() {
  try {
      const response = yield call(fetchData, '/mymilestones');
      yield put(getMyMilestonesSuccess(response));
  } catch (error) {
    	console.log('get my milestones error', error);
      yield put(getMyMilestonesError(error));
  }
}

function* getMyCalendar() {
  try {
      const response = yield call(fetchData, '/mycalendar');
      yield put(getMyCalendarSuccess(response));
  } catch (error) {
    	console.log('get my calendar error', error);
      yield put(getMyCalendarError(error));
  }
}

function* getMyActivities() {
  try {
      const response = yield call(fetchData, '/myactivities');
      yield put(getMyActivitiesSuccess(response));
  } catch (error) {
    	console.log('get my activities error', error);
      yield put(getMyActivitiesError(error));
  }
}

function* getBookmarks() {
  try {
      const response = yield call(fetchData, '/bookmarks');
      yield put(getBookmarksSuccess(response));
  } catch (error) {
    	console.log('get bookmarks error', error);
      yield put(getBookmarksError(error));
  }
}

function* getQuickies() {
  try {
      const response = yield call(fetchData, '/quickies');
      yield put(getQuickiesSuccess(response));
  } catch (error) {
    	console.log('get quickies error', error);
      yield put(getQuickiesError(error));
  }
}


///////////////////////////////////////
export function* watchGetMyProjects() {
  yield takeEvery(MY_PROJECTS, getMyProjects);
}
export function* watchGetMyTasks() {
  yield takeEvery(MY_TASKS, getMyTasks);
}
export function* watchGetMyEvents() {
  yield takeEvery(MY_EVENTS, getMyEvents);
}
export function* watchGetMyMilestones() {
  yield takeEvery(MY_MILESTONES, getMyMilestones);
}
export function* watchGetMyCalendar() {
  yield takeEvery(MY_CALENDAR, getMyCalendar);
}
export function* watchGetMyActivities() {
  yield takeEvery(MY_ACTIVITIES, getMyActivities);
}
export function* watchGetBookmarks() {
  yield takeEvery(BOOKMARKS, getBookmarks);
}
export function* watchGetQuickies() {
  yield takeEvery(QUICKIES, getQuickies);
}

function* MeSaga() {
	yield all([
		fork(watchGetMyProjects),
    fork(watchGetMyTasks),
    fork(watchGetMyEvents),
    fork(watchGetMyMilestones),
    fork(watchGetMyCalendar),
    fork(watchGetMyActivities),
    fork(watchGetBookmarks),    
    fork(watchGetQuickies),    
	]);
}

export default MeSaga;
