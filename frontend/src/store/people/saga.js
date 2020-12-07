import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_PEOPLE
} from "./actionTypes";

import {
	getAllPeopleSuccess, getAllPeopleError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllPeople() {
  try {
    const response = yield call(fetchData, '/allpeople');
    yield put(getAllPeopleSuccess(response));
  } catch (error) {
    console.log('get all people error', error);
    yield put(getAllPeopleError(error));
  }
}

export function* watchGetAllPeople() {
  yield takeEvery(ALL_PEOPLE, getAllPeople);
}

function* PeopleSaga() {
	yield all([
		fork(watchGetAllPeople)
	]);
}

export default PeopleSaga;
