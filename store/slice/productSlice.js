import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
    setRestaurantProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const { setProduct, setRestaurantProducts } = productSlice.actions;

export default productSlice.reducer;
