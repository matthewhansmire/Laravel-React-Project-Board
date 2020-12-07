import {
	ALL_OVERVIEWS, ALL_OVERVIEWS_SUCCESS, ALL_OVERVIEWS_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allOverviews: []
};

const Overview = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_OVERVIEWS:
			return {
				...state,
				loading: true
			}

		case ALL_OVERVIEWS_SUCCESS:
			return {
				...state,
				loading: false,
				allOverviews: action.payload
			}

		case ALL_OVERVIEWS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Overview;
