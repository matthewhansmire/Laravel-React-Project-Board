import { 
  ALL_DISCUSSIONS, ALL_DISCUSSIONS_SUCCESS, ALL_DISCUSSIONS_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllDiscussions = () => {
  return {
      type: ALL_DISCUSSIONS      
  }
}

export const getAllDiscussionsSuccess = (allDiscussions) => {      
  return {
    type: ALL_DISCUSSIONS_SUCCESS,
    payload: allDiscussions
  }
}

export const getAllDiscussionsError = (error) => {
  return {
    type: ALL_DISCUSSIONS_ERROR,
    payload: error
  }
}