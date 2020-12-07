import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	ALL_FILES
} from "./actionTypes";

import {
	getAllFilesSuccess, getAllFilesError,

} from './actions'

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllFiles() {
  try {
    const response = yield call(fetchData, '/allfiles');
    yield put(getAllFilesSuccess(response));
  } catch (error) {
    console.log('get all files error', error);
    yield put(getAllFilesError(error));
  }
}

export function* watchGetAllFiles() {
  yield takeEvery(ALL_FILES, getAllFiles);
}

function* FileSaga() {
	yield all([
		fork(watchGetAllFiles)
	]);
}

export default FileSaga;
