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
  TASK_LABELS, TASK_LABELS_SUCCESS, TASK_LABELS_ERROR
} from './actionTypes';

////////////////////////////////////
export const getAllTasks = () => {
  return {
      type: ALL_TASKS      
  }
}

export const getAllTasksSuccess = (allTasks) => {      
  return {
    type: ALL_TASKS_SUCCESS,
    payload: allTasks
  }
}

export const getAllTasksError = (error) => {
  return {
    type: ALL_TASKS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTasklists = (param) => {
	return {
		type: TASKLISTS,
		payload: param
	}
}

export const getTasklistsSuccess = (tasklists) => {
	return {
		type: TASKLISTS_SUCCESS,
		payload: tasklists
	}
}

export const getTasklistsError = (error) => {
	return {
		type: TASKLISTS_ERROR,
		payload: error
	}
}

////////////////////////////////////
export const getTasks = (param) => {
  return {
      type: TASKS,
      payload: param      
  }
}

export const getTasksSuccess = (tasks) => {      
  return {
    type: TASKS_SUCCESS,
    payload: tasks
  }
}

export const getTasksError = (error) => {
  return {
    type: TASKS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTasklistsTasks = (param) => {
  return {
      type: TASKLISTS_TASKS,
      payload: param      
  }
}

export const getTasklistsTasksSuccess = (tasklistsTasks) => {      
  return {
    type: TASKLISTS_TASKS_SUCCESS,
    payload: tasklistsTasks
  }
}

export const getTasklistsTasksError = (error) => {
  return {
    type: TASKLISTS_TASKS_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addTask = (task) => {
  return {
      type: ADD_TASK,
      payload: task
  }
}

export const addTaskSuccess = (response) => {      
  return {
    type: ADD_TASK_SUCCESS,
    payload: response
  }
}

export const addTaskError = (error) => {
  return {
    type: ADD_TASK_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addTaskAssignees = (assignees) => {  
  return {
      type: ADD_TASK_ASSIGNEES,
      payload: {assignees: assignees}
  }
}

export const addTaskAssigneesSuccess = (response) => {      
  return {
    type: ADD_TASK_ASSIGNEES_SUCCESS,
    payload: response
  }
}

export const addTaskAssigneesError = (error) => {
  return {
    type: ADD_TASK_ASSIGNEES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const updateTask = (task) => {
  return {
      type: UPDATE_TASK,
      payload: task
  }
}

export const updateTaskSuccess = (response) => {      
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: response
  }
}

export const updateTaskError = (error) => {
  return {
    type: UPDATE_TASK_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addSubTask = (subTask) => {
  return {
      type: ADD_SUB_TASK,
      payload: subTask
  }
}

export const addSubTaskSuccess = (response) => {      
  return {
    type: ADD_SUB_TASK_SUCCESS,
    payload: response
  }
}

export const addSubTaskError = (error) => {
  return {
    type: ADD_SUB_TASK_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addSubTaskAssignees = (assignees) => {  
  return {
      type: ADD_SUB_TASK_ASSIGNEES,
      payload: {assignees: assignees}
  }
}

export const addSubTaskAssigneesSuccess = (response) => {      
  return {
    type: ADD_SUB_TASK_ASSIGNEES_SUCCESS,
    payload: response
  }
}

export const addSubTaskAssigneesError = (error) => {
  return {
    type: ADD_SUB_TASK_ASSIGNEES_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTaskProgresses = () => {
  return {
      type: TASK_PROGRESSES      
  }
}

export const getTaskProgressesSuccess = (taskProgresses) => {      
  return {
    type: TASK_PROGRESSES_SUCCESS,
    payload: taskProgresses
  }
}

export const getTaskProgressesError = (error) => {
  return {
    type: TASK_PROGRESSES_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTaskLabels = () => {
  return {
      type: TASK_LABELS
  }
}

export const getTaskLabelsSuccess = (taskLabels) => {      
  return {
    type: TASK_LABELS_SUCCESS,
    payload: taskLabels
  }
}

export const getTaskLabelsError = (error) => {
  return {
    type: TASK_LABELS_ERROR,
    payload: error
  }
}



