import axiosApi from "../../axiosApi";
import { takeEvery } from "redux-saga/effects";
import { put } from 'redux-saga/effects';
import { toast } from "react-toastify";
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
} from '../actions/photoActions';


export function* photosSagas() {
    try {
        const response = yield axiosApi.get('/photos');
        yield put(fetchPhotosSuccess(response.data));
    } catch (error) {
        toast.error('Fetch photos failed');
        yield put(fetchPhotosFailure(error.response.data));
    }
}

// export function* photoSagas(id) {
//     try {
//         const response = yield axiosApi.get('/photos' + id);
//         yield put(fetchPhotoSuccess(response.data));
//     } catch (error) {
//         toast.error('Fetch photo failed');
//         yield put(fetchPhotoFailure(error.response.data));
//     }
// }

// export function* createPhotoSagas() {
//     try {
//         const response = yield axiosApi.post('/photos');
//         yield put(createPhotoSuccess(response.data));
//         toast.success('Photo created');
//         // yield put(historyPush('/'));
//     } catch (error) {
//         toast.error('Fetch photos failed');
//         yield put(createPhotoFailure(error.response.data));
//     }
// }

// export function* deletePhotoSagas(id) {
//     try {
//         const response = yield axiosApi.get('/photos' + id);
//         yield put(fetchPhotosSuccess(response.data));
//         // yield put(historyPush('/'));
//         toast.success('Photo deleted');
//     } catch (error) {
//         toast.error('Fetch photos failed');
//         yield put(createPhotoFailure(error.response.data));
//     }
// }

const photoSaga = [
    takeEvery(fetchPhotosRequest, photosSagas),
    // takeEvery(fetchPhotoRequest, photoSagas),
    // takeEvery(createPhotoRequest, createPhotoSagas),
    // takeEvery(fetchPhotosRequest, deletePhotoSagas),
];

export default photoSaga;