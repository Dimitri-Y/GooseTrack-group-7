import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  editUser,
  verificationEmail,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    skype: null,
    avatarURL: null,
  },
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        handlePending(state);
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = false; // need to submit the VerifyToken in email
        state.email = action.payload.email;
      })
      .addCase(register.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logIn.pending, (state) => {
        handlePending(state);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.email = '';
      })
      .addCase(logIn.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logOut.pending, (state) => {
        handlePending(state);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        handlePending(state);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        handleRejected(state, action);
      })
      .addCase(editUser.pending, (state) => {
        state.isRefreshing = true;
        handlePending(state);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isRefreshing = false;
        handleRejected(state, action);
      })
      .addCase(verificationEmail.pending, (state) => {
        handlePending(state);
      })
      .addCase(verificationEmail.fulfilled, () => {
        // state.user.verify = true;
        // state.user.verificationToken = 'Verify';
      })
      .addCase(verificationEmail.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const authReducer = authSlice.reducer;
