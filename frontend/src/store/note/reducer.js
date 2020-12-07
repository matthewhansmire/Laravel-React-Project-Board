import {
	ALL_NOTES, ALL_NOTES_SUCCESS, ALL_NOTES_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allNotes: []
};

const Note = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_NOTES:
			return {
				...state,
				loading: true
			}

		case ALL_NOTES_SUCCESS:
			return {
				...state,
				loading: false,
				allNotes: action.payload
			}

		case ALL_NOTES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Note;
