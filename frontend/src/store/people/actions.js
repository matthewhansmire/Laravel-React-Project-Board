import { 
  ALL_PEOPLE, ALL_PEOPLE_SUCCESS, ALL_PEOPLE_ERROR,

} from './actionTypes';

////////////////////////////////////
export const getAllPeople = () => {
  return {
      type: ALL_PEOPLE
  }
}

export const getAllPeopleSuccess = (allPeople) => {      
  return {
    type: ALL_PEOPLE_SUCCESS,
    payload: allPeople
  }
}

export const getAllPeopleError = (error) => {
  return {
    type: ALL_PEOPLE_ERROR,
    payload: error
  }
}