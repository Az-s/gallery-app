import axiosApi from "../../axiosApi";
import { takeEvery } from "redux-saga/effects";
import { put } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { historyPush } from "../actions/historyActions";
import {
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure,
    fetchPhotoRequest,
    fetchPhotoSuccess,
    fetchPhotoFailure,
    createPhotoRequest,
    createPhotoSuccess,
    createPhotoFailure,
    deletePhoto,
} from '../actions/photoActions';

export function* fetchPhotosSagas({ payload: id }) {
    try {
        let url = '/photos';

        if (id) {
            url += '?user=' + id;
        }

        const response = yield axiosApi.get(url);
        yield put(fetchPhotosSuccess(response.data));
    } catch (error) {
        toast.error('Fetch photos failed');
        yield put(fetchPhotosFailure(error.response.data));
    }
}

export function* fetchPhotoSagas({ payload: id }) {
    try {
        const response = yield axiosApi.get('/photos' + id);
        yield put(fetchPhotoSuccess(response.data));
    } catch (error) {
        toast.error('Fetch photo failed');
        yield put(fetchPhotoFailure(error.response.data));
    }
}

export function* createPhotoSagas({ payload: photosData }) {
    try {
        const response = yield axiosApi.post('/photos', photosData);
        yield put(createPhotoSuccess(response.data));
        toast.success('Photo created');
        yield put(historyPush('/'));
    } catch (error) {
        toast.error('Create photo failed');
        yield put(createPhotoFailure(error.response.data));
    }
}

export function* deletePhotoSagas({ payload: id }) {
    try {
        const response = yield axiosApi.delete('/photos' + id);
        yield put(fetchPhotosSuccess(response.data));
        yield put(historyPush('/'));
        toast.success('Photo deleted');
    } catch (error) {
        toast.error('Delete photo failed');
        yield put(createPhotoFailure(error.response.data));
    }
}

const photosSagas = [
    takeEvery(fetchPhotosRequest, fetchPhotosSagas),
    takeEvery(fetchPhotoRequest, fetchPhotoSagas),
    takeEvery(createPhotoRequest, createPhotoSagas),
    takeEvery(deletePhoto, deletePhotoSagas),
];

export default photosSagas;