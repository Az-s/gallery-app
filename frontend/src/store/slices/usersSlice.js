import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
};

const name = 'users';

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    registerUser: state => {
      state.registerLoading = true;
    },
    registerUserSuccess: (state, { payload: user }) => {
      state.registerLoading = false;
      state.user = user;
    },
    registerUserFailure: (state, { payload: error }) => {
      state.registerLoading = false;
      state.registerError = error;
    },
    loginUser: state => {
      state.loginLoading = true;
    },
    loginUserSuccess: (state, { payload: user }) => {
      state.loginLoading = false;
      state.user = user;
    },
    loginUserFailure: (state, { payload: error }) => {
      state.loginLoading = false;
      state.loginError = error;
    },
    googleLogin: state => {
      state.loginLoading = true;
    },
    logoutUser: () => { },
    logoutSuccess: state => {
      state.user = null;
    }
  }
});

export default usersSlice;