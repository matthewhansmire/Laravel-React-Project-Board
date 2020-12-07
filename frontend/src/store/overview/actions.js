import { 
  ALL_OVERVIEWS, ALL_OVERVIEWS_SUCCESS, ALL_OVERVIEWS_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllOverviews = () => {
  return {
      type: ALL_OVERVIEWS      
  }
}

export const getAllOverviewsSuccess = (allOverviews) => {      
  return {
    type: ALL_OVERVIEWS_SUCCESS,
    payload: allOverviews
  }
}

export const getAllOverviewsError = (error) => {
  return {
    type: ALL_OVERVIEWS_ERROR,
    payload: error
  }
}