import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
