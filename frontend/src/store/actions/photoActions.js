import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";
import WarningIcon from '@material-ui/icons/Warning';
import {historyPush} from "./historyActions";

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const FETCH_PHOTO_REQUEST = 'FETCH_PHOTO_REQUEST';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

export const CREATE_PHOTO_REQUEST = 'CREATE_PHOTO_REQUEST';
export const CREATE_PHOTO_SUCCESS = 'CREATE_PHOTO_SUCCESS';
export const CREATE_PHOTO_FAILURE = 'CREATE_PHOTO_FAILURE';

export const fetchPhotosRequest = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccess = photos => ({type: FETCH_PHOTOS_SUCCESS, payload: photos});
export const fetchPhotosFailure = () => ({type: FETCH_PHOTOS_FAILURE});

export const fetchPhotoRequest = () => ({type: FETCH_PHOTO_REQUEST});
export const fetchPhotoSuccess = photo => ({type: FETCH_PHOTO_SUCCESS, payload: photo});
export const fetchPhotoFailure = () => ({type: FETCH_PHOTO_FAILURE});

export const createPhotoRequest = () => ({type: CREATE_PHOTO_REQUEST});
export const createPhotoSuccess = () => ({type: CREATE_PHOTO_SUCCESS});
export const createPhotoFailure = (error) => ({type: CREATE_PHOTO_FAILURE, payload: error});


export const fetchPhotos = (query) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPhotosRequest());
      const response = await axiosApi.get('/photos' + query);
      dispatch(fetchPhotosSuccess(response.data));
    } catch (error) {
      dispatch(fetchPhotosFailure());
      toast.error('Could not fetch photos!', {
        theme: 'colored',
        icon: <WarningIcon/>
      });
    }
  }
};

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