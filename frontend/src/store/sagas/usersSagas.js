import { takeEvery } from "redux-saga/effects";
import {
    registerUser, registerUserFailure, registerUserSuccess,
    loginUser, loginUserSuccess, loginUserFailure, googleLogin,
    logoutUser ,logoutSuccess
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

export function* loginUserSaga({ payload: userData }) {
    try {
        const response = yield axiosApi.post('/users/sessions', userData);
        yield put(loginUserSuccess(response.data.user));
        yield put(historyPush('/'));
        toast.success('Login successful!');
    } catch (error) {
        toast.error(error.response.data.global);
        yield put(loginUserFailure(error.response.data));
    }
}

export function* googleLoginSaga({ payload: googleData }) {
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

export function* logoutUserSaga() {
    try {
        yield axiosApi.delete('/users/sessions');
        yield put(logoutSuccess());
        yield put(historyPush('/'));
        toast.success('Logged!');
    } catch (e) {
        toast.success('Could not logout');
    }
}

const usersSaga = [
    takeEvery(registerUser, registerUserSaga),
    takeEvery(loginUser, loginUserSaga),
    takeEvery(googleLogin, googleLoginSaga),
    takeEvery(logoutUser, logoutUserSaga),
];

export default usersSaga;