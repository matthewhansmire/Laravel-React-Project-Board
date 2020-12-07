import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_REPORTS
} from "./actionTypes";

import {
	getAllReportsSuccess, getAllReportsError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllReports() {
  try {
    const response = yield call(fetchData, '/allreports');
    yield put(getAllReportsSuccess(response));
  } catch (error) {
    console.log('get all resports error', error);
    yield put(getAllReportsError(error));
  }
}

export function* watchGetAllReports() {
  yield takeEvery(ALL_REPORTS, getAllReports);
}

function* ReportSaga() {
	yield all([
		fork(watchGetAllReports)
	]);
}

export default ReportSaga;
