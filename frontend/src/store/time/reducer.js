import {
	ALL_TIMESHEETS, ALL_TIMESHEETS_SUCCESS, ALL_TIMESHEETS_ERROR,
	PROJECT_TIMESHEETS, PROJECT_TIMESHEETS_SUCCESS, PROJECT_TIMESHEETS_ERROR,
	TASKLIST_TASKS, TASKLIST_TASKS_SUCCESS, TASKLIST_TASKS_ERROR,
	SUBTASKS, SUBTASKS_SUCCESS, SUBTASKS_ERROR,
	TIME_STATUSES, TIME_STATUSES_SUCCESS, TIME_STATUSES_ERROR,

	ADD_TIMESHEET, ADD_TIMESHEET_SUCCESS, ADD_TIMESHEET_ERROR,
	ADD_TIME, ADD_TIME_SUCCESS, ADD_TIME_ERROR
} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allTimesheets: [],
	projectTimesheets: [],
	tasklistTasks: [],
	subtasks: [],
	timeStatuses: [],

	addedTimesheet: null,
	addedTime: null
};

const Time = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_TIMESHEETS:
			return {
				...state,
				loading: true
			}

		case ALL_TIMESHEETS_SUCCESS:
			return {
				...state,
				loading: false,
				allTimesheets: action.payload
			}

		case ALL_TIMESHEETS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case PROJECT_TIMESHEETS:
			return {
				...state,
				loading: true
			}

		case PROJECT_TIMESHEETS_SUCCESS:
			return {
				...state,
				loading: false,
				projectTimesheets: action.payload
			}

		case PROJECT_TIMESHEETS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASKLIST_TASKS:
			return {
				...state,
				loading: true
			}

		case TASKLIST_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasklistTasks: action.payload
			}

		case TASKLIST_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case SUBTASKS:
			return {
				...state,
				loading: true
			}

		case SUBTASKS_SUCCESS:
			return {
				...state,
				loading: false,
				subtasks: action.payload
			}

		case SUBTASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TIME_STATUSES:
			return {
				...state,
				loading: true
			}

		case TIME_STATUSES_SUCCESS:
			return {
				...state,
				loading: false,
				timeStatuses: action.payload
			}

		case TIME_STATUSES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		///////////////////
		case ADD_TIMESHEET:
			return {
				...state,
				loading: true,
				addedTimesheet: null
			}

		case ADD_TIMESHEET_SUCCESS:
			return {
				...state,
				loading: false,
				addedTimesheet: action.payload
			}

		case ADD_TIMESHEET_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_TIME:
			return {
				...state,
				loading: true,
				addedTime: null
			}

		case ADD_TIME_SUCCESS:
			return {
				...state,
				loading: false,
				addedTime: action.payload
			}

		case ADD_TIME_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Time;
