import { 
  ALL_TIMESHEETS, ALL_TIMESHEETS_SUCCESS, ALL_TIMESHEETS_ERROR,
  PROJECT_TIMESHEETS, PROJECT_TIMESHEETS_SUCCESS, PROJECT_TIMESHEETS_ERROR,
  TASKLIST_TASKS, TASKLIST_TASKS_SUCCESS, TASKLIST_TASKS_ERROR,
  SUBTASKS, SUBTASKS_SUCCESS, SUBTASKS_ERROR,
  TIME_STATUSES, TIME_STATUSES_SUCCESS, TIME_STATUSES_ERROR,
  
  ADD_TIMESHEET, ADD_TIMESHEET_SUCCESS, ADD_TIMESHEET_ERROR,
  ADD_TIME, ADD_TIME_SUCCESS, ADD_TIME_ERROR,
} from './actionTypes';

////////////////////////////////////
export const getAllTimesheets = () => {
  return {
    type: ALL_TIMESHEETS,    
  }
}

export const getAllTimesheetsSuccess = (timesheets) => {
  return {
    type: ALL_TIMESHEETS_SUCCESS,
    payload: timesheets
  }
}

export const getAllTimesheetsError = (error) => {
  return {
    type: ALL_TIMESHEETS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getProjectTimesheets = (param) => {
  return {
      type: PROJECT_TIMESHEETS,
      payload: param      
  }
}

export const getProjectTimesheetsSuccess = (projectTimesheets) => {      
  return {
    type: PROJECT_TIMESHEETS_SUCCESS,
    payload: projectTimesheets
  }
}

export const getProjectTimesheetsError = (error) => {
  return {
    type: PROJECT_TIMESHEETS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTasklistTasks = (param) => {
  return {
    type: TASKLIST_TASKS,
    payload: param
  }
}

export const getTasklistTasksSuccess = (tasklistTasks) => {
  return {
    type: TASKLIST_TASKS_SUCCESS,
    payload: tasklistTasks
  }
}

export const getTasklistTasksError = (error) => {
  return {
    type: TASKLIST_TASKS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getSubtasks = (param) => {
  return {
    type: SUBTASKS,
    payload: param
  }
}

export const getSubtasksSuccess = (subtasks) => {
  return {
    type: SUBTASKS_SUCCESS,
    payload: subtasks
  }
}

export const getSubtasksError = (error) => {
  return {
    type: SUBTASKS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getTimeStatuses = () => {
  return {
    type: TIME_STATUSES,    
  }
}

export const getTimeStatusesSuccess = (timeStatuses) => {
  return {
    type: TIME_STATUSES_SUCCESS,
    payload: timeStatuses
  }
}

export const getTimeStatusesError = (error) => {
  return {
    type: TIME_STATUSES_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addTimesheet = (timesheet) => {
  return {
      type: ADD_TIMESHEET,
      payload: timesheet
  }
}

export const addTimesheetSuccess = (response) => {      
  return {
    type: ADD_TIMESHEET_SUCCESS,
    payload: response
  }
}

export const addTimesheetError = (error) => {
  return {
    type: ADD_TIMESHEET_ERROR,
    payload: error
  }
}

/////////////////////////////////////
export const addTime = (time) => {
  return {
      type: ADD_TIME,
      payload: time
  }
}

export const addTimeSuccess = (response) => {      
  return {
    type: ADD_TIME_SUCCESS,
    payload: response
  }
}

export const addTimeError = (error) => {
  return {
    type: ADD_TIME_ERROR,
    payload: error
  }
}


