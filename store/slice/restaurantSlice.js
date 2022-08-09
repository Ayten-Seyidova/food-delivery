import { createSlice } from "@reduxjs/toolkit";
import { restaurantAPI } from "../../pages/api/restaurant";

const initialState = {
  data: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state,action) => {
      state.data = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
