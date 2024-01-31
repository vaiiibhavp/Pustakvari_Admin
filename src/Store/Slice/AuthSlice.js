import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "AuthLogin",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
    isloggedIn: false,
    status: "Idle",
  },
  reducers: {
    LogIn: (state, action) => {
      state.user = action.payload;
    },
    LogOut: (state, action) => {
      state.user = "";
      localStorage.clear();
      state.isloggedIn = false;
    },
  },
});

export default authSlice.reducer;

export const { LogOut, LogIn } = authSlice.actions;
