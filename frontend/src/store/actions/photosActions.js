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
  deletePhoto,
} = photosSlice.actions;

