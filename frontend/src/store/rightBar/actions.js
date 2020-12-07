import {
	SHOW_RIGHTBAR,
	HIDE_RIGHTBAR,
	RIGHTBAR_PARAM
} from "./actionTypes";

export const showRightBar = (kind) => ({
	type: SHOW_RIGHTBAR,
	payload: kind
});

export const hideRightBar = () => ({
	type: HIDE_RIGHTBAR,
	payload: null
});

export const setRightBarParam = (param) => ({
	type: RIGHTBAR_PARAM,
	payload: param
});
