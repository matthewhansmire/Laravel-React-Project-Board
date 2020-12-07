import {
	ALL_EVENTS, ALL_EVENTS_SUCCESS, ALL_EVENTS_ERROR,
	ALL_MILESTONES, ALL_MILESTONES_SUCCESS, ALL_MILESTONES_ERROR,
		
	PROJECT_EVENTS, PROJECT_EVENTS_SUCCESS, PROJECT_EVENTS_ERROR,
	PROJECT_MILESTONES, PROJECT_MILESTONES_SUCCESS, PROJECT_MILESTONES_ERROR
} from "./actionTypes";

const INIT_STATE = {
	loading: false,
	error: "",
	allEvents: [],
	allMilestones: [],
	projectEvents: [],
	projectMilestones: []
};

const Calendar = (state = INIT_STATE, action) => {
	switch (action.type) {
		///////////////////
		case ALL_EVENTS:
			return {
				...state,
				loading: true
			}

		case ALL_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				allEvents: action.payload
			}

		case ALL_EVENTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ALL_MILESTONES:
			return {
				...state,
				loading: true
			}

		case ALL_MILESTONES_SUCCESS:
			return {
				...state,
				loading: false,
				allMilestones: action.payload
			}

		case ALL_MILESTONES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		///////////////////
		case PROJECT_EVENTS:
			return {
				...state,
				loading: true
			}

		case PROJECT_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				projectEvents: action.payload
			}

		case PROJECT_EVENTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case PROJECT_MILESTONES:
			return {
				...state,
				loading: true
			}

		case PROJECT_MILESTONES_SUCCESS:
			return {
				...state,
				loading: false,
				projectMilestones: action.payload
			}

		case PROJECT_MILESTONES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state;
	}
};

export default Calendar;
