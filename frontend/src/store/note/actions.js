import { 
  ALL_NOTES, ALL_NOTES_SUCCESS, ALL_NOTES_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllNotes = () => {
  return {
      type: ALL_NOTES      
  }
}

export const getAllNotesSuccess = (allNotes) => {      
  return {
    type: ALL_NOTES_SUCCESS,
    payload: allNotes
  }
}

export const getAllNotesError = (error) => {
  return {
    type: ALL_NOTES_ERROR,
    payload: error
  }
}