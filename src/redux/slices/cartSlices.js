import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload); // Adăugăm produsul în coș
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload); // Eliminăm produsul din coș
    },
  },
});

// Selectori pentru a obține produsele din coș
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.items.length;

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
