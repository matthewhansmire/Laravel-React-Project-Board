import {
	ALL_REPORTS, ALL_REPORTS_SUCCESS, ALL_REPORTS_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allReports: []
};

const Report = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_REPORTS:
			return {
				...state,
				loading: true
			}

		case ALL_REPORTS_SUCCESS:
			return {
				...state,
				loading: false,
				allReports: action.payload
			}

		case ALL_REPORTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Report;
