
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';
import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './actionTypes';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from './actionTypes';
import { FORGET_PASSWORD, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR } from "./actionTypes";
import { PROFILE, PROFILE_SUCCESS, PROFILE_ERROR } from './actionTypes';
import { SET_PERSON} from './actionTypes';

export const login = (person) => {  
    return {
        type: LOGIN,
        payload: person
    }
}

export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

export const logout = (history) => {
    return {
        type: LOGOUT,
        payload: { history }
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
        payload: {}
    }
}

export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: error
  }
}

///////////////////////////
export const register = (user) => {
  return {
      type: REGISTER,
      payload: { user }
  }
}

export const registerSuccess = (user) => {
  return {
      type: REGISTER_SUCCESS,
      payload: user
  }
}

export const registerError = (error) => {
  return {
      type: REGISTER_ERROR,
      payload: error
  }
}

///////////////////////////
export const forgetPassword = (user, history) => {
  return {
    type: FORGET_PASSWORD,
    payload: { user, history }
  };
};

export const forgetPasswordSuccess = response => {
  return {
    type: FORGET_PASSWORD_SUCCESS,
    payload: response
  };
};

export const forgetPasswordError = error => {
  return {
    type: FORGET_PASSWORD_ERROR,
    payload: error
  };
};

//////////////
export const profile = (user) => {
  return {
      type: PROFILE,
      payload: { user }
  }
}

export const profileSuccess = (response) => {
  return {
      type: PROFILE_SUCCESS,
      payload: response
  }
}

export const profileError = (error) => {
  return {
      type: PROFILE_ERROR,
      payload: error
  }
}

export const setPerson = (person) => {
  return {
    type: SET_PERSON,
    payload: person
  }
}

