import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, logIn, logOut, register } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  loadingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.loadingUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loadingUser = false;
    },
    [getCurrentUser.rejected](state) {
      state.loadingUser = false;
    },
  },
});

export default authSlice.reducer;

// extraReducers: builder => {
//     builder
//       .addCase(signUp.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUp.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user.name = payload.user.name;
//         state.user.email = payload.user.email;
//         state.token = payload.token;
//         state.isLogIn = true;
//       })
//       .addCase(signUp.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//         state.isLogIn = false;
//       })
//         getUser
//       .addCase(getUser.pending, state => {
//         state.loadingUser = true;
//         state.error = null;
//       })
//       .addCase(getUser.fulfilled, (state, { payload }) => {
//         state.loadingUser = false;
//         state.user = payload;
//         state.isLogIn = true;
//       })
//       .addCase(getUser.rejected, (state, { payload }) => {
//         state.loadingUser = false;
//         state.error = payload;
//         state.token = null;
//         state.isLogIn = false;
//       })
//       Sign In
//       .addCase(signIn.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signIn.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user.name = payload.user.name;
//         state.user.email = payload.user.email;
//         state.token = payload.token;
//         state.isLogIn = true;
//       })
//       .addCase(signIn.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//         state.isLogIn = false;
//       })
//       Sign Out
//       .addCase(signOut.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signOut.fulfilled, state => {
//         state.loading = false;
//         state.user = initialState.user;
//         state.token = null;
//         state.isLogIn = false;
//       })
//       .addCase(signOut.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//         state.isLogIn = false;
//       });
//   },
