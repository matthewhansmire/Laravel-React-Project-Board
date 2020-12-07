// @flow
import {
	SHOW_RIGHTBAR,
	HIDE_RIGHTBAR,
	RIGHTBAR_PARAM
} from "./actionTypes";

const INIT_STATE = {
	showRightBar: false,
	rightBarKind: '',
	rightBarParam: null
};

const RightBar = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SHOW_RIGHTBAR:
			return {
				...state,
				showRightBar: true,
				rightBarKind: action.payload
			};

		case HIDE_RIGHTBAR:
			return {
				...state,
				showRightBar: false
			};
		
		case RIGHTBAR_PARAM:
			return {
				...state,
				rightBarParam: action.payload
			}

		default:
			return state;
	}
};

export default RightBar;
