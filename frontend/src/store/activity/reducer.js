import {
	ALL_ACTIVITIES, ALL_ACTIVITIES_SUCCESS, ALL_ACTIVITIES_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allActivities: []
};

const Activity = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_ACTIVITIES:
			return {
				...state,
				loading: true
			}

		case ALL_ACTIVITIES_SUCCESS:
			return {
				...state,
				loading: false,
				allActivities: action.payload
			}

		case ALL_ACTIVITIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Activity;
