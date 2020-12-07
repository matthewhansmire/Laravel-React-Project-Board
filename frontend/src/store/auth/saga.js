import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { postLogin, postRegister, postForgetPwd } from '../../service/auth';

import { LOGIN, LOGOUT, REGISTER, FORGET_PASSWORD, PROFILE } from './actionTypes';
import { 
  loginSuccess, loginError,
  logoutSuccess, logoutError,
  registerSuccess, registerError,
  forgetPasswordSuccess, forgetPasswordError,
  profileSuccess, profileError
} from './actions';


function* login({payload}) {
  try {
      const response = yield call(postLogin, '/login', { email: payload.email, password: payload.password });      
      localStorage.setItem("projhubloggedperson", JSON.stringify(response)); 
      yield put(loginSuccess(response));      
  } catch (error) {
      yield put(loginError(error));
  }
}

function* logout() {
  try {
      localStorage.removeItem("projhubloggedperson"); 
      yield put(logoutSuccess());     
  } catch (error) {
      yield put(logoutError(error));
  }
}

// Is user register successfull then direct plot user in redux.
function* register({ payload: { user } }) {
  try {
      const response = yield call(postRegister, '/register', user);
      yield put(registerSuccess(response));
  } catch (error) {
      console.log('error', error)
      yield put(registerError(error));
  }
}

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetPassword({ payload: { user, history } }) {
  try {
    const response = yield call(postForgetPwd, '/forgetpwd', { email: user.email });
    if (response) {
      yield put(
        forgetPasswordSuccess("Reset link are sended to your mailbox, check there first")
      );
    }
  } catch (error) {
    yield put(forgetPasswordError(error));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login)
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout)
}

export function* watchRegister() {
  yield takeEvery(REGISTER, register);
}

export function* watchForgetPassword() {
  yield takeEvery(FORGET_PASSWORD, forgetPassword);
}


function* AuthSaga() {
  yield all([
      fork(watchLogin),
      fork(watchLogout),
      fork(watchRegister),
      fork(watchForgetPassword),
  ]);
}

export default AuthSaga;
