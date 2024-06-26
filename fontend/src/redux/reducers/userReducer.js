import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder)=>{
  builder.addCase("RegisterRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("RegisterSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("RegisterFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoginRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoginSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoginFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoadUserRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoadUserSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoadUserFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LogoutRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LogoutSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LogoutFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })
})

// export const userReducers = createReducer(initialState, {
//   LoginRequest: (state) => {
//     state.loading = true;
//     state.isAuthenticated = false;
//   },
//   LoginSuccess: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.user = action.payload;
//   },
//   LoginFail: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.error = action.payload;
//   },

//   LoadUserRequest: (state) => {
//     state.loading = true;
//     state.isAuthenticated = false;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.loading = false;
//     state.user = action.payload;
//     state.isAuthenticated = true;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.error = action.payload;
//   },
//   LogoutRequest: (state) => {
//     state.loading = true;
//   },
//   LogoutSuccess: (state) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.user = null;
//   },
//   LogoutFail: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.error = action.payload;
//   },
//   ClearErrors: (state) => {
//     state.error = null;
//   },
// });

// export const forgotPasswordReducer = createReducer(initialState, {
//   ForgotPasswordRequest: (state) => {
//     state.loading = true;
//     state.error = null;
//   },
//   ForgotPasswordSuccess: (state, action) => {
//     state.loading = false;
//     state.success = action.payload;
//   },
//   ForgotPasswordFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   ResetPasswordRequest: (state) => {
//     state.loading = true;
//   },
//   ResetPasswordSuccess: (state, action) => {
//     state.loading = false;
//     state.success = action.payload;
//   },
//   ResetPasswordFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
//   ClearErrors: (state) => {
//     state.error = null;
//   },
// });
