import { 
  ALL_EVENTS, ALL_EVENTS_SUCCESS, ALL_EVENTS_ERROR,
  ALL_MILESTONES, ALL_MILESTONES_SUCCESS, ALL_MILESTONES_ERROR,
  
  PROJECT_EVENTS, PROJECT_EVENTS_SUCCESS, PROJECT_EVENTS_ERROR,
  PROJECT_MILESTONES, PROJECT_MILESTONES_SUCCESS, PROJECT_MILESTONES_ERROR
} from './actionTypes';

////////////////////////////////////
export const getAllEvents = () => {
  return {
      type: ALL_EVENTS      
  }
}

export const getAllEventsSuccess = (allEvents) => {      
  return {
    type: ALL_EVENTS_SUCCESS,
    payload: allEvents
  }
}

export const getAllEventsError = (error) => {
  return {
    type: ALL_EVENTS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getAllMilestones = () => {
  return {
      type: ALL_MILESTONES      
  }
}

export const getAllMilestonesSuccess = (allMilestones) => {      
  return {
    type: ALL_MILESTONES_SUCCESS,
    payload: allMilestones
  }
}

export const getAllMilestonesError = (error) => {
  return {
    type: ALL_MILESTONES_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getProjectEvents = (param) => {
  return {
      type: PROJECT_EVENTS,
      payload: param      
  }
}

export const getProjectEventsSuccess = (projectEvents) => {      
  return {
    type: PROJECT_EVENTS_SUCCESS,
    payload: projectEvents
  }
}

export const getProjectEventsError = (error) => {
  return {
    type: PROJECT_EVENTS_ERROR,
    payload: error
  }
}

////////////////////////////////////
export const getProjectMilestones = (param) => {
  return {
      type: PROJECT_MILESTONES,
      payload: param      
  }
}

export const getProjectMilestonesSuccess = (projectMilestones) => {      
  return {
    type: PROJECT_MILESTONES_SUCCESS,
    payload: projectMilestones
  }
}

export const getProjectMilestonesError = (error) => {
  return {
    type: PROJECT_MILESTONES_ERROR,
    payload: error
  }
}