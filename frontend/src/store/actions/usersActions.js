import usersSlice from "../slices/usersSlice";

export const {
  registerUser,
  registerUserSuccess,
  registerUserFailure,
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  googleLogin,
  logoutUser,
  logoutSuccess,
} = usersSlice.actions;

