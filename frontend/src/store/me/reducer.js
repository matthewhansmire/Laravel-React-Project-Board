import {
	MY_PROJECTS, MY_PROJECTS_SUCCESS, MY_PROJECTS_ERROR,
	MY_TASKS, MY_TASKS_SUCCESS, MY_TASKS_ERROR,
	MY_EVENTS, MY_EVENTS_SUCCESS, MY_EVENTS_ERROR,
	MY_MILESTONES, MY_MILESTONES_SUCCESS, MY_MILESTONES_ERROR,
	MY_ACTIVITIES, MY_ACTIVITIES_SUCCESS, MY_ACTIVITIES_ERROR,
	BOOKMARKS, BOOKMARKS_SUCCESS, BOOKMARKS_ERROR,
	QUICKIES, QUICKIES_SUCCESS, QUICKIES_ERROR
} from './actionTypes';

const initialState = {
	loading: false,
	error: "",
	myProjects: [],
	myTasks: [],	
	myEvents: [],
	myMilestones: [],
	myActivities: [],
	bookmarks: [],
	quickies: []
};

const Me = (state = initialState, action) => {
	switch (action.type) {
		///////////////////
		case MY_PROJECTS:
			return {
				...state,
				loading: true
			}

		case MY_PROJECTS_SUCCESS:
			return {
				...state,
				loading: false,
				myProjects: action.payload
			}

		case MY_PROJECTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		/////////////////////
		case MY_TASKS:
			return {
				...state,
				loading: true
			}

		case MY_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				myTasks: action.payload
			}

		case MY_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		/////////////////////
		case MY_EVENTS:
			return {
				...state,
				loading: true
			}

		case MY_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				myEvents: action.payload
			}

		case MY_EVENTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		/////////////////////
		case MY_MILESTONES:
			return {
				...state,
				loading: true
			}

		case MY_MILESTONES_SUCCESS:
			return {
				...state,
				loading: false,
				myMilestones: action.payload
			}

		case MY_MILESTONES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		/////////////////////
		case MY_ACTIVITIES:
			return {
				...state,
				loading: true
			}

		case MY_ACTIVITIES_SUCCESS:
			return {
				...state,
				loading: false,
				myActivities: action.payload
			}

		case MY_ACTIVITIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		/////////////////////
		case BOOKMARKS:
			return {
				...state,
				loading: true
			}

		case BOOKMARKS_SUCCESS:
			return {
				...state,
				loading: false,
				bookmarks: action.payload
			}

		case BOOKMARKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		/////////////////////
		case QUICKIES:
			return {
				...state,
				loading: true
			}

		case QUICKIES_SUCCESS:
			return {
				...state,
				loading: false,
				quickies: action.payload
			}

		case QUICKIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		/////////////////////
		default:
			return state;
	}
};

export default Me;
