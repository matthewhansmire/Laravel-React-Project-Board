import {
	ALL_PEOPLE, ALL_PEOPLE_SUCCESS, ALL_PEOPLE_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allPeople: []
};

const People = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_PEOPLE:
			return {
				...state,
				loading: true
			}

		case ALL_PEOPLE_SUCCESS:
			return {
				...state,
				loading: false,
				allPeople: action.payload
			}

		case ALL_PEOPLE_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default People;
