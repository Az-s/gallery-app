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

// export const fetchPhoto = id => {
//   return async dispatch => {
//     try {
//       dispatch(fetchPhotoRequest());
//       const response = await axiosApi.get('/photos/' + id);
//       dispatch(fetchPhotoSuccess(response.data));
//     } catch (e) {
//       dispatch(fetchPhotoFailure());
//     }
//   };
// };

// export const createPhoto = photosData => {
//   return async dispatch => {
//     try {
//       dispatch(createPhotoRequest());
//       await axiosApi.post('/photos', photosData);
//       dispatch(createPhotoSuccess());
//       dispatch(historyPush('/'));
//       toast.success('Photo created');
//     } catch (e) {
//       dispatch(createPhotoFailure(e.response.data));
//       toast.error('Could not create photo');
//     }
//   };
// };

// export const deleteContacts = (id) => {
//   return async dispatch => {
//     try {
//       dispatch(fetchPhotosRequest());

//       await axiosApi.delete('/photos/' + id);
//       dispatch(fetchPhotosSuccess());
//       toast.success('Photo deleted');
//     } catch (e) {
//       dispatch(fetchPhotosFailure(e));
//     }
//   };
// };