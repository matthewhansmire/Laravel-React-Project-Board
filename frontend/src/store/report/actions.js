import { 
  ALL_REPORTS, ALL_REPORTS_SUCCESS, ALL_REPORTS_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllReports = () => {
  return {
      type: ALL_REPORTS      
  }
}

export const getAllReportsSuccess = (allReports) => {      
  return {
    type: ALL_REPORTS_SUCCESS,
    payload: allReports
  }
}

export const getAllReportsError = (error) => {
  return {
    type: ALL_REPORTS_ERROR,
    payload: error
  }
}