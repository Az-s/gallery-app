import { createSlice } from "@reduxjs/toolkit";

const name = 'photos'

const photosSlice = createSlice({
    name,
    initialState: {
        photos: [],
        photo: null,
        fetchPhotosLoading: false,
        fetchPhotoLoading: false,
        createPhotoLoading: false,
        fetchPhotoError: null,
        createPhotoError: null,
    },
    reducers: {
        fetchPhotosRequest: state => {
            state.fetchPhotosLoading = true;
        },
        fetchPhotosSuccess: (state, { payload: photos }) => {
            state.fetchPhotosLoading = false;
            state.photos = photos;
        },
        fetchPhotosFailure: state => {
            state.fetchPhotosLoading = false;
        },
        fetchPhotoRequest: state => {
            state.fetchPhotoLoading = true;
        },
        fetchPhotoSuccess: (state, { payload: photo }) => {
            state.fetchPhotoLoading = false;
            state.photo = photo;
        },
        fetchPhotoFailure: state => {
            state.fetchPhotoLoading = false;
        },
        createProductRequest: state => {
            state.createPhotoLoading = true;
        },
        createProductSuccess: state => {
            state.createPhotoLoading = false;
        },
        createProductFailure: (state, { payload: error }) => {
            state.createPhotoLoading = false;
            state.createPhotoError = error;
        },
    }
});

export default photosSlice;