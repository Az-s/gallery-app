import axiosApi from "../../axiosApi";
import { toast } from "react-toastify";
import { historyPush } from "./historyActions";

import photosSlice from "../slices/photosSlice";

export const {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  fetchPhotoRequest,
  fetchPhotoSuccess,
  fetchPhotoFailure,
  createPhotoRequest,
  createPhotoSuccess,
  createPhotoFailure,
} = photosSlice.actions





export const CREATE_PHOTO_REQUEST = 'CREATE_PHOTO_REQUEST';
export const CREATE_PHOTO_SUCCESS = 'CREATE_PHOTO_SUCCESS';
export const CREATE_PHOTO_FAILURE = 'CREATE_PHOTO_FAILURE';




// export const createPhotoRequest = () => ({ type: CREATE_PHOTO_REQUEST });
// export const createPhotoSuccess = () => ({ type: CREATE_PHOTO_SUCCESS });
// export const createPhotoFailure = (error) => ({ type: CREATE_PHOTO_FAILURE, payload: error });


export const fetchPhoto = id => {
  return async dispatch => {
    try {
      dispatch(fetchPhotoRequest());
      const response = await axiosApi.get('/photos/' + id);
      dispatch(fetchPhotoSuccess(response.data));
    } catch (e) {
      dispatch(fetchPhotoFailure());
    }
  };
};

export const createPhoto = photosData => {
  return async dispatch => {
    try {
      dispatch(createPhotoRequest());
      await axiosApi.post('/photos', photosData);
      dispatch(createPhotoSuccess());
      dispatch(historyPush('/'));
      toast.success('Photo created');
    } catch (e) {
      dispatch(createPhotoFailure(e.response.data));
      toast.error('Could not create photo');
    }
  };
};

export const deleteContacts = (id) => {
  return async dispatch => {
    try {
      dispatch(fetchPhotosRequest());

      await axiosApi.delete('/photos/' + id);
      dispatch(fetchPhotosSuccess());
      toast.success('Photo deleted');
    } catch (e) {
      dispatch(fetchPhotosFailure(e));
    }
  };
};