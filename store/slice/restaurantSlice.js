import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  myRestaurant: {},
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.data = action.payload;
    },
    setMyRestaurant: (state, action) => {
      state.myRestaurant = action.payload;
    },
  },
});

export const { setRestaurant, setMyRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
