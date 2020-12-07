import {
	ALL_FILES, ALL_FILES_SUCCESS, ALL_FILES_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allFiles: []
};

const File = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_FILES:
			return {
				...state,
				loading: true
			}

		case ALL_FILES_SUCCESS:
			return {
				...state,
				loading: false,
				allFiles: action.payload
			}

		case ALL_FILES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default File;
