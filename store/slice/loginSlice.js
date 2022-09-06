import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  data: [],
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
      state.data = action.payload;
    },
    getUserData: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      state.data = [];
      state.isLogin = false;
      state.user = {};
      localStorage.setItem("isLogin", false);
    },
  },
});

export const { setLogin, getUserData, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
