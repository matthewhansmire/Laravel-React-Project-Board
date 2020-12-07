import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_ACTIVITIES
} from "./actionTypes";

import {
	getAllActivitiesSuccess, getAllActivitiesError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllActivities() {
  try {
    const response = yield call(fetchData, '/allactivities');
    yield put(getAllActivitiesSuccess(response));
  } catch (error) {
    console.log('get all activities error', error);
    yield put(getAllActivitiesError(error));
  }
}

export function* watchGetAllActivities() {
  yield takeEvery(ALL_ACTIVITIES, getAllActivities);
}

function* ActivitySaga() {
	yield all([
		fork(watchGetAllActivities)
	]);
}

export default ActivitySaga;
