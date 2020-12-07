import { 
  ALL_ACTIVITIES, ALL_ACTIVITIES_SUCCESS, ALL_ACTIVITIES_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllActivities = () => {
  return {
      type: ALL_ACTIVITIES      
  }
}

export const getAllActivitiesSuccess = (allActivities) => {      
  return {
    type: ALL_ACTIVITIES_SUCCESS,
    payload: allActivities
  }
}

export const getAllActivitiesError = (error) => {
  return {
    type: ALL_ACTIVITIES_ERROR,
    payload: error
  }
}