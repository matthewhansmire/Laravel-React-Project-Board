import { 
  ALL_FILES, ALL_FILES_SUCCESS, ALL_FILES_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllFiles = () => {
  return {
      type: ALL_FILES      
  }
}

export const getAllFilesSuccess = (allFiles) => {      
  return {
    type: ALL_FILES_SUCCESS,
    payload: allFiles
  }
}

export const getAllFilesError = (error) => {
  return {
    type: ALL_FILES_ERROR,
    payload: error
  }
}