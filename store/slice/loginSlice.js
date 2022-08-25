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
  },
});

export const { setLogin, getUserData } = loginSlice.actions;

export default loginSlice.reducer;
