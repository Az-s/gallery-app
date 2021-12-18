import { createSlice } from "@reduxjs/toolkit";

const name = 'photos'

const photosSlice = createSlice({
    name,
    initialState: {
        photos: [],
        photo: null,
        fetchPhotosLoading: false,
        fetchPhotoLoading: false,
        fetchPhotoError: null,
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
            state.fetchEventError = error;
        },
    }
});

export default photosSlice;