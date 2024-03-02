import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart:[],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQunatity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQunatity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCat = (state) => state.cart.cart;
export const totalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, val) => sum + val.quantity, 0);
export const totalCartPrice = (state) =>
  state.cart.cart.reduce((sum, val) => sum + val.totalPrice, 0);
export const currentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
