import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const alreadyExists = Object.keys(state.basketItems).find(
        (item) => item.id === action.payload.id
      );
      if (alreadyExists) {
        const newItem = {}
        state.basketItems = [...state.basketItems,{...state.basketItems}];
        l;
      } else {
        state.basketItems = [
          ...state.basketItems,
          { item: action.payload, count: 1 },
        ];
      }
    },
  },
});

export const { addBasket } = basketSlice.actions;

export default basketSlice.reducer;
