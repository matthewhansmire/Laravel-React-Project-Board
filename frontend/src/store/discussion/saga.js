import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_DISCUSSIONS
} from "./actionTypes";

import {
	getAllDiscussionsSuccess, getAllDiscussionsError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllDiscussions() {
  try {
    const response = yield call(fetchData, '/alldiscussions');
    yield put(getAllDiscussionsSuccess(response));
  } catch (error) {
    console.log('get all discussions error', error);
    yield put(getAllDiscussionsError(error));
  }
}

export function* watchGetAllDiscussions() {
  yield takeEvery(ALL_DISCUSSIONS, getAllDiscussions);
}

function* DiscussionSaga() {
	yield all([
		fork(watchGetAllDiscussions)
	]);
}

export default DiscussionSaga;
