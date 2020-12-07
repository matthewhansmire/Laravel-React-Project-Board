import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_NOTES
} from "./actionTypes";

import {
	getAllNotesSuccess, getAllNotesError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllNotes() {
  try {
    const response = yield call(fetchData, '/allnotes');
    yield put(getAllNotesSuccess(response));
  } catch (error) {
    console.log('get all notes error', error);
    yield put(getAllNotesError(error));
  }
}

export function* watchGetAllNotes() {
  yield takeEvery(ALL_NOTES, getAllNotes);
}

function* NoteSaga() {
	yield all([
		fork(watchGetAllNotes)
	]);
}

export default NoteSaga;
