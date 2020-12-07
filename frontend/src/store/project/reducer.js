import {
	ALL_PROJECTS, ALL_PROJECTS_SUCCESS, ALL_PROJECTS_ERROR,
	PROJECT_CATEGORIES, PROJECT_CATEGORIES_SUCCESS, PROJECT_CATEGORIES_ERROR,
	PROJECT_STATUSES, PROJECT_STATUSES_SUCCESS, PROJECT_STATUSES_ERROR,
	PROJECT_COLORS, PROJECT_COLORS_SUCCESS, PROJECT_COLORS_ERROR,
	PROJECT_ACCESS_ROLES, PROJECT_ACCESS_ROLES_SUCCESS, PROJECT_ACCESS_ROLES_ERROR,
	USER_PERSONS, USER_PERSONS_SUCCESS, USER_PERSONS_ERROR,

	ADD_PROJECT, ADD_PROJECT_SUCCESS, ADD_PROJECT_ERROR,
	ADD_PROJECT_CATEGORY, ADD_PROJECT_CATEGORY_SUCCESS, ADD_PROJECT_CATEGORY_ERROR,
	ADD_PROJECT_STATUS, ADD_PROJECT_STATUS_SUCCESS, ADD_PROJECT_STATUS_ERROR,
	ADD_PROJECT_ASSIGNEES, ADD_PROJECT_ASSIGNEES_SUCCESS, ADD_PROJECT_ASSIGNEES_ERROR,
	INVITE_PERSON, INVITE_PERSON_SUCCESS, INVITE_PERSON_ERROR,

	PROJECT_LABELS, PROJECT_LABELS_SUCCESS, PROJECT_LABELS_ERROR,
	ADD_PROJECT_LABEL, ADD_PROJECT_LABEL_SUCCESS, ADD_PROJECT_LABEL_ERROR,
		
} from './actionTypes';

const initialState = {
	loading: false,
	error: "",
	allProjects: [],
	projectCategories: [],
	projectStatuses: [],
	userPersons: null,
	colors: [],
	accessRoles: [],

	addedProject: null,
	addProjectCategorySuccess: false,
	addProjectCategoryError: false,
	addProjectStatusSuccess: false,
	addProjectStatusError: false,
	addProjectAssigneesSuccess: false,
	addProjectAssigneesError: false,
	invitePersonSuccess: false,
	invitePersonError: false,

	projectLabels: [],
	addedProjectLabel: null,
	
};

const Project = (state = initialState, action) => {
	switch (action.type) {
		///////////////////
		case ALL_PROJECTS:
			return {
				...state,
				loading: true
			}

		case ALL_PROJECTS_SUCCESS:
			return {
				...state,
				loading: false,
				allProjects: action.payload
			}

		case ALL_PROJECTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		///////////////////
		case PROJECT_CATEGORIES:
			return {
				...state,
				loading: true
			}

		case PROJECT_CATEGORIES_SUCCESS:
			return {
				...state,
				loading: false,
				projectCategories: action.payload
			}

		case PROJECT_CATEGORIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case PROJECT_STATUSES:
			return {
				...state,
				loading: true
			}

		case PROJECT_STATUSES_SUCCESS:
			return {
				...state,
				loading: false,
				projectStatuses: action.payload
			}

		case PROJECT_STATUSES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case USER_PERSONS:
			return {
				...state,
				loading: true
			}

		case USER_PERSONS_SUCCESS:
			return {
				...state,
				loading: false,
				userPersons: action.payload
			}

		case USER_PERSONS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case PROJECT_COLORS:
			return {
				...state,
				loading: true
			}

		case PROJECT_COLORS_SUCCESS:
			return {
				...state,
				loading: false,
				colors: action.payload
			}

		case PROJECT_COLORS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case PROJECT_ACCESS_ROLES:
			return {
				...state,
				loading: true
			}

		case PROJECT_ACCESS_ROLES_SUCCESS:
			return {
				...state,
				loading: false,
				accessRoles: action.payload
			}

		case PROJECT_ACCESS_ROLES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_PROJECT:
			return {
				...state,
				loading: true,
				addedProject: null
			}

		case ADD_PROJECT_SUCCESS:
			return {
				...state,
				loading: false,
				addedProject: action.payload
			}

		case ADD_PROJECT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_PROJECT_CATEGORY:
			return {
				...state,
				loading: true,
				addProjectCategorySuccess: false,
				addProjectCategoryError: false
			}

		case ADD_PROJECT_CATEGORY_SUCCESS:
			return {
				...state,
				loading: false,				
				addProjectCategorySuccess: true
			}

		case ADD_PROJECT_CATEGORY_ERROR:
			return {
				...state,
				loading: false,
				addProjectCategoryError: true,
				error: action.payload
			}

		///////////////////
		case ADD_PROJECT_STATUS:
			return {
				...state,
				loading: true,
				addProjectStatusSuccess: false,
				addProjectStatusError: false
			}

		case ADD_PROJECT_STATUS_SUCCESS:
			return {
				...state,
				loading: false,
				addProjectStatusSuccess: true				
			}

		case ADD_PROJECT_STATUS_ERROR:
			return {
				...state,
				loading: false,
				addProjectStatusError: true,
				error: action.payload
			}

		///////////////////
		case ADD_PROJECT_ASSIGNEES:
			return {
				...state,
				loading: true,
				addProjectAssigneesSuccess: false,
				addProjectAssigneesError: false,
			}

		case ADD_PROJECT_ASSIGNEES_SUCCESS:
			return {
				...state,
				loading: false,
				addProjectAssigneesSuccess: true,				
			}

		case ADD_PROJECT_ASSIGNEES_ERROR:
			return {
				...state,
				loading: false,
				addProjectAssigneesError: true,
				error: action.payload
			}

		///////////////////
		case INVITE_PERSON:
			return {
				...state,
				loading: true,
				invitePersonSuccess: false,
				invitePersonError: false
			}

		case INVITE_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				invitePersonSuccess: true				
			}

		case INVITE_PERSON_ERROR:
			return {
				...state,
				loading: false,
				invitePersonError: true,
				error: action.payload
			}
		
		///////////////////
		case PROJECT_LABELS:
			return {
				...state,
				loading: true
			}

		case PROJECT_LABELS_SUCCESS:
			return {
				...state,
				loading: false,
				projectLabels: action.payload
			}

		case PROJECT_LABELS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		///////////////////
		case ADD_PROJECT_LABEL:
			return {
				...state,
				loading: true,
				addedProjectLabel: null
			}

		case ADD_PROJECT_LABEL_SUCCESS:
			return {
				...state,
				loading: false,
				addedProjectLabel: action.payload
			}

		case ADD_PROJECT_LABEL_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}	
		

		default:
			return state;
	}
};

export default Project;
