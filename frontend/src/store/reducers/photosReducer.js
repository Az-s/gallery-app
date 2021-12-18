import {
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE,
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILURE,
    CREATE_PHOTO_REQUEST,
    CREATE_PHOTO_SUCCESS,
    CREATE_PHOTO_FAILURE
  } from "../actions/photoActions";
  
  const initialState = {
    photos: [],
    photo: null,
    fetchLoading: false,
    singleLoading: false,
    createPhotoLoading: false,
    createPhotoError: null
  };
  
  const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PHOTOS_REQUEST:
        return {...state, fetchLoading: true};
      case FETCH_PHOTOS_SUCCESS:
        return {...state,  fetchLoading: false, photos: action.payload};
      case FETCH_PHOTOS_FAILURE:
        return {...state, fetchLoading: false};
      case FETCH_PHOTO_REQUEST:
        return {...state, singleLoading: true};
      case FETCH_PHOTO_SUCCESS:
        return {...state,  singleLoading: false, photo: action.payload};
      case FETCH_PHOTO_FAILURE:
        return {...state, singleLoading: false};
      case CREATE_PHOTO_REQUEST:
        return {...state, createProductLoading: true};
      case CREATE_PHOTO_SUCCESS:
        return {...state, createProductLoading: false, createProductError: null};
      case CREATE_PHOTO_FAILURE:
        return {...state, createProductLoading: false, createProductError: action.payload};
      default:
        return state;
    }
  };
  
  export default photosReducer;