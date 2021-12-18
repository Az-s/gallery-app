import { takeEvery } from "redux-saga/effects";
import {
  registerUser, registerUserFailure, registerUserSuccess,
  loginUser, loginUserSuccess, loginUserFailure,googleLogin,
  clearErrorUser , logoutUser
} from "../actions/usersActions";
import axiosApi from "../../axiosApi";
import { historyPush } from "../actions/historyActions";
import { put } from 'redux-saga/effects';
import { toast } from "react-toastify";

export function* registerUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users', userData);
    yield put(registerUserSuccess(response.data));
    yield put(historyPush('/'));
    toast.success('Registered successful!');
  } catch (error) {
    toast.error(error.response.data.global);
    yield put(registerUserFailure(error.response.data));
  }
}

export function* loginUserSaga(userData) {
  try {
    const response = yield axiosApi.post('/users' , userData);
    yield put(loginUserSuccess(response.data));
    yield put(historyPush('/'));
    toast.success('Login successful!');
  } catch (error) {
    toast.error(error.response.data.global);
    yield put(loginUserFailure(error.response.data));
  }
}

export function* googleLoginSaga(googleData) {
  try {
    const response = yield axiosApi.post('/users/googleLogin', {
      tokenId: googleData.tokenId,
      googleId: googleData.googleId,
    });
    yield put(loginUserSuccess(response.data.user));
    yield put(historyPush('/'));
    toast.success('Login successful!');
  } catch (error) {
    toast.error(error.response.data.global);
    yield put(loginUserFailure(error.response.data));
  }
}

export function* clearErrorUserSaga({type: CLEAR_ERROR_USER}) {
  yield put({type: CLEAR_ERROR_USER});
}

export function* logoutUserSaga({type: LOGOUT_USER}) {
    yield axiosApi.delete('/users/sessions');
    yield put({type: LOGOUT_USER});
    yield put(historyPush('/'));
    toast.success('Login successful!');
}

const usersSaga = [
  takeEvery(registerUser, registerUserSaga),
  takeEvery(loginUser, loginUserSaga),
  takeEvery(googleLogin, googleLoginSaga),
  takeEvery(clearErrorUser, clearErrorUserSaga),
  takeEvery(logoutUser, logoutUserSaga),
];

export default usersSaga;