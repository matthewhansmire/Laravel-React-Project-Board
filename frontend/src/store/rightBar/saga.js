// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
	SHOW_RIGHTBAR,
	HIDE_RIGHTBAR
} from "./actionTypes";

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {	
	switch (action) {
		case "add":
			if (document.body) document.body.classList.add(cssClass);
			break;
		case "remove":
			if (document.body) document.body.classList.remove(cssClass);
			break;
		default:
			if (document.body) document.body.classList.toggle(cssClass);
			break;
	}

	return true;
}

/**
 * Show the rightbar
 */
function* showRightBar() {	
	try {
		yield call(manageBodyClass, "right-bar-enabled", "add");
	} catch (error) { }
}

/**
 * Hides the rightbar
 */
function* hideRightBar() {
	try {
		yield call(manageBodyClass, "right-bar-enabled", "remove");
	} catch (error) { }
}

export function* watchShowRightSidebar() {
	yield takeEvery(SHOW_RIGHTBAR, showRightBar);
}

export function* watchHideRightSidebar() {
	yield takeEvery(HIDE_RIGHTBAR, hideRightBar);
}

function* RightBarSaga() {
	yield all([
		fork(watchShowRightSidebar),
		fork(watchHideRightSidebar),
	]);
}

export default RightBarSaga;
