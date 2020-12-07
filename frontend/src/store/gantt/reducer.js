import {
	PROJECTS_TASKS, PROJECTS_TASKS_SUCCESS, PROJECTS_TASKS_ERROR

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	projectsTasks: []
};

const Gantt = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case PROJECTS_TASKS:
			return {
				...state,
				loading: true
			}

		case PROJECTS_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				projectsTasks: action.payload
			}

		case PROJECTS_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Gantt;
