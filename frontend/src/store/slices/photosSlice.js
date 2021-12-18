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
        fetchPhotosFailure: (state, { payload: error }) => {
            state.fetchPhotosLoading = false;
            state.fetchPhotoError = error;
        },
        fetchPhotoRequest: state => {
            state.fetchPhotoLoading = true;
        },
        fetchPhotoSuccess: (state, { payload: photo }) => {
            state.fetchPhotoLoading = false;
            state.photo = photo;
        },
        fetchPhotoFailure: (state, { payload: error }) => {
            state.fetchPhotoLoading = false;
            state.fetchPhotoError = error;
        },
        createPhotoRequest: state => {
            state.createPhotoLoading = true;
        },
        createPhotoSuccess: (state) => {
            state.createPhotoLoading = false;
        },
        createPhotoFailure: (state, { payload: error }) => {
            state.createPhotoLoading = false;
            state.createPhotoError = error;
        },
    }
});

export default photosSlice;