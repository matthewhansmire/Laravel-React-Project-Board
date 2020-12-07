import { 
  PROJECTS_TASKS, PROJECTS_TASKS_SUCCESS, PROJECTS_TASKS_ERROR

} from './actionTypes';

////////////////////////////////////
export const getProjectsTasks = () => {
  return {
      type: PROJECTS_TASKS,
  }
}

export const getProjectsTasksSuccess = (projectsTasks) => {      
  return {
    type: PROJECTS_TASKS_SUCCESS,
    payload: projectsTasks
  }
}

export const getProjectsTasksError = (error) => {
  return {
    type: PROJECTS_TASKS_ERROR,
    payload: error
  }
}
