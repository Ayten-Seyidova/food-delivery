import { createSlice, current } from "@reduxjs/toolkit";
import { useId } from "react";

const initialState = {
  cart: [],
  orders: [],
  orderId: 1000,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id != action.payload);
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    checkout: (state, action) => {
      const orderId = state.orderId;
      const orderDate = new Date();
      orderDate =
        orderDate.getDate() +
        "-" +
        orderDate.getMonth() +
        "-" +
        orderDate.getFullYear();
      const amount = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
      const address = action.payload.address;
      const contact = action.payload.contact;
      const payment = action.payload.payment;
      state.orders.push({
        orderId,
        orderDate,
        address,
        amount,
        payment,
        contact,
      });
      state.cart = [];
      state.orderId = state.orderId + 1;
    },
  },
});

export const {
  addBasket,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  checkout,
  completedOrder,
} = basketSlice.actions;

export default basketSlice.reducer;
