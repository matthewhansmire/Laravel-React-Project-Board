import {
	ALL_TASKS, ALL_TASKS_SUCCESS, ALL_TASKS_ERROR,
	TASKLISTS, TASKLISTS_SUCCESS, TASKLISTS_ERROR,
	TASKS, TASKS_SUCCESS, TASKS_ERROR,
	TASKLISTS_TASKS, TASKLISTS_TASKS_SUCCESS, TASKLISTS_TASKS_ERROR,

	ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR,
	ADD_TASK_ASSIGNEES, ADD_TASK_ASSIGNEES_SUCCESS, ADD_TASK_ASSIGNEES_ERROR,
	UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_ERROR,

	ADD_SUB_TASK, ADD_SUB_TASK_SUCCESS, ADD_SUB_TASK_ERROR,
	ADD_SUB_TASK_ASSIGNEES, ADD_SUB_TASK_ASSIGNEES_SUCCESS, ADD_SUB_TASK_ASSIGNEES_ERROR,

	TASK_PROGRESSES, TASK_PROGRESSES_SUCCESS, TASK_PROGRESSES_ERROR,
	TASK_LABELS, TASK_LABELS_SUCCESS, TASK_LABELS_ERROR,

} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allTasks: [],
	tasklists: [],
	tasks: [],
	tasklistsTasks: [],

	taskProgresses: [],
	taskLabels: [],

	addedTask: null,
	addTaskAssigneesSuccess: false,
	updateTaskSuccess: false,
	addedSubTask: null,
	addedSubTaskAssigneesSuccess: false,
};

const Task = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_TASKS:
			return {
				...state,
				loading: true
			}

		case ALL_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				allTasks: action.payload
			}

		case ALL_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASKLISTS:
			return {
				...state,
				loading: true
			}

		case TASKLISTS_SUCCESS:
			return {
				...state,
				loading: false,
				tasklists: action.payload
			}

		case TASKLISTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASKS:
			return {
				...state,
				loading: true
			}

		case TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasks: action.payload
			}

		case TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASKLISTS_TASKS:
			return {
				...state,
				loading: true
			}

		case TASKLISTS_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasklistsTasks: action.payload
			}

		case TASKLISTS_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_TASK:
			return {
				...state,
				loading: true,
				addedTask: null
			}

		case ADD_TASK_SUCCESS:
			return {
				...state,
				loading: false,
				addedTask: action.payload
			}

		case ADD_TASK_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_TASK_ASSIGNEES:
			return {
				...state,
				loading: true,
				addTaskAssigneesSuccess: false
			}

		case ADD_TASK_ASSIGNEES_SUCCESS:
			return {
				...state,
				loading: false,
				addTaskAssigneesSuccess: true
			}

		case ADD_TASK_ASSIGNEES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case UPDATE_TASK:
			return {
				...state,
				loading: true,
				updateTaskSuccess: false
			}

		case UPDATE_TASK_SUCCESS:
			return {
				...state,
				loading: false,
				updateTaskSuccess: true
			}

		case UPDATE_TASK_ERROR:
			return {
				...state,
				loading: false,
				updateTaskSuccess: false,
				error: action.payload
			}

		///////////////////
		case ADD_SUB_TASK:
			return {
				...state,
				loading: true,
				addedSubTask: null
			}

		case ADD_SUB_TASK_SUCCESS:
			return {
				...state,
				loading: false,
				addedSubTask: action.payload
			}

		case ADD_SUB_TASK_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_SUB_TASK_ASSIGNEES:
			return {
				...state,
				loading: true,
				addSubTaskAssigneesSuccess: false
			}

		case ADD_SUB_TASK_ASSIGNEES_SUCCESS:
			return {
				...state,
				loading: false,
				addSubTaskAssigneesSuccess: true
			}

		case ADD_SUB_TASK_ASSIGNEES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASK_PROGRESSES:
			return {
				...state,
				loading: true
			}

		case TASK_PROGRESSES_SUCCESS:
			return {
				...state,
				loading: false,
				taskProgresses: action.payload
			}

		case TASK_PROGRESSES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case TASK_LABELS:
			return {
				...state,
				loading: true
			}

		case TASK_LABELS_SUCCESS:
			return {
				...state,
				loading: false,
				taskLabels: action.payload
			}

		case TASK_LABELS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
};

export default Task;
