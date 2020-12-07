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

////////////////////////////////////
export const getAllProjects = () => {
  return {
      type: ALL_PROJECTS      
  }
}

export const getAllProjectsSuccess = (allProjects) => {      
  return {
    type: ALL_PROJECTS_SUCCESS,
    payload: allProjects
  }
}

export const getAllProjectsError = (error) => {
  return {
    type: ALL_PROJECTS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const getProjectCategories = () => {
  return {
      type: PROJECT_CATEGORIES
  }
}

export const getProjectCategoriesSuccess = (projectCategories) => {      
  return {
    type: PROJECT_CATEGORIES_SUCCESS,
    payload: projectCategories
  }
}

export const getProjectCategoriesError = (error) => {
  return {
    type: PROJECT_CATEGORIES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const getProjectStatuses = () => {
  return {
      type: PROJECT_STATUSES
  }
}

export const getProjectStatusesSuccess = (projectStatuses) => {      
  return {
    type: PROJECT_STATUSES_SUCCESS,
    payload: projectStatuses
  }
}

export const getProjectStatusesError = (error) => {
  return {
    type: PROJECT_STATUSES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const getUserPersons = () => {
  return {
      type: USER_PERSONS
  }
}

export const getUserPersonsSuccess = (userPersons) => {      
  return {
    type: USER_PERSONS_SUCCESS,
    payload: userPersons
  }
}

export const getUserPersonsError = (error) => {
  return {
    type: USER_PERSONS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const getProjectColors = () => {
  return {
      type: PROJECT_COLORS
  }
}

export const getProjectColorsSuccess = (colors) => {      
  return {
    type: PROJECT_COLORS_SUCCESS,
    payload: colors
  }
}

export const getProjectColorsError = (error) => {
  return {
    type: PROJECT_COLORS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const getProjectAccessRoles = () => {
  return {
      type: PROJECT_ACCESS_ROLES
  }
}

export const getProjectAccessRolesSuccess = (accessRoles) => {      
  return {
    type: PROJECT_ACCESS_ROLES_SUCCESS,
    payload: accessRoles
  }
}

export const getProjectAccessRolesError = (error) => {
  return {
    type: PROJECT_ACCESS_ROLES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addProject = (project) => {
  return {
      type: ADD_PROJECT,
      payload: project
  }
}

export const addProjectSuccess = (response) => {      
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: response
  }
}

export const addProjectError = (error) => {
  return {
    type: ADD_PROJECT_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addProjectCategory = (category) => {
  return {
      type: ADD_PROJECT_CATEGORY,
      payload: category
  }
}

export const addProjectCategorySuccess = (response) => {      
  return {
    type: ADD_PROJECT_CATEGORY_SUCCESS,
    payload: response
  }
}

export const addProjectCategoryError = (error) => {
  return {
    type: ADD_PROJECT_CATEGORY_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addProjectStatus = (status) => {
  return {
      type: ADD_PROJECT_STATUS,
      payload: status
  }
}

export const addProjectStatusSuccess = (response) => {      
  return {
    type: ADD_PROJECT_STATUS_SUCCESS,
    payload: response
  }
}

export const addProjectStatusError = (error) => {
  return {
    type: ADD_PROJECT_STATUS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addProjectAssignees = (assignees) => {  
  return {
      type: ADD_PROJECT_ASSIGNEES,
      payload: {assignees: assignees}
  }
}

export const addProjectAssigneesSuccess = (response) => {      
  return {
    type: ADD_PROJECT_ASSIGNEES_SUCCESS,
    payload: response
  }
}

export const addProjectAssigneesError = (error) => {
  return {
    type: ADD_PROJECT_ASSIGNEES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const invitePerson = (person) => {  
  return {
      type: INVITE_PERSON,
      payload: person
  }
}

export const invitePersonSuccess = (response) => {      
  return {
    type: INVITE_PERSON_SUCCESS,
    payload: response
  }
}

export const invitePersonError = (error) => {
  return {
    type: INVITE_PERSON_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getProjectLabels = (param) => {
  return {
      type: PROJECT_LABELS,
      payload: param
  }
}

export const getProjectLabelsSuccess = (labels) => {      
  return {
    type: PROJECT_LABELS_SUCCESS,
    payload: labels
  }
}

export const getProjectLabelsError = (error) => {
  return {
    type: PROJECT_LABELS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addProjectLabel = (label) => {
  return {
      type: ADD_PROJECT_LABEL,
      payload: label
  }
}

export const addProjectLabelSuccess = (response) => {      
  return {
    type: ADD_PROJECT_LABEL_SUCCESS,
    payload: response
  }
}

export const addProjectLabelError = (error) => {
  return {
    type: ADD_PROJECT_LABEL_ERROR,
    payload: error
  }
}

