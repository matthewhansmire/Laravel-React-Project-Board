import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_OVERVIEWS
} from "./actionTypes";

import {
	getAllOverviewsSuccess, getAllOverviewsError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllOverviews() {
  try {
    const response = yield call(fetchData, '/alloverviews');
    yield put(getAllOverviewsSuccess(response));
  } catch (error) {
    console.log('get all overviews error', error);
    yield put(getAllOverviewsError(error));
  }
}

export function* watchGetAllOverviews() {
  yield takeEvery(ALL_OVERVIEWS, getAllOverviews);
}

function* OverviewSaga() {
	yield all([
		fork(watchGetAllOverviews)
	]);
}

export default OverviewSaga;
