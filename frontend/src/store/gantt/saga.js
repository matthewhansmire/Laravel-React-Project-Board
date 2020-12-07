import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	PROJECTS_TASKS
} from "./actionTypes";

import {
	getProjectsTasksSuccess, getProjectsTasksError

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getProjectsTasks() {
  try {
    const response = yield call(fetchData, '/projectstasks');
    yield put(getProjectsTasksSuccess(response));
  } catch (error) {
    console.log('get projects tasks error', error);
    yield put(getProjectsTasksError(error));
  }
}

export function* watchGetProjectsTasks(){
  yield takeEvery(PROJECTS_TASKS, getProjectsTasks);
}


function* GanttSaga() {
	yield all([
		fork(watchGetProjectsTasks)
	]);
}

export default GanttSaga;
