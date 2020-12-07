import {
	ALL_DISCUSSIONS, ALL_DISCUSSIONS_SUCCESS, ALL_DISCUSSIONS_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allDiscussions: []
};

const Discussion = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_DISCUSSIONS:
			return {
				...state,
				loading: true
			}

		case ALL_DISCUSSIONS_SUCCESS:
			return {
				...state,
				loading: false,
				allDiscussions: action.payload
			}

		case ALL_DISCUSSIONS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Discussion;
