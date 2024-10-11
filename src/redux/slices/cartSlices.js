import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Adaugă produsul în coș
    },
  },
});

export const { addToCart } = cartSlice.actions; // Exportă acțiunea addToCart

export const selectTotalItems = (state) => state.cart.items.length; // Selector pentru numărul total de produse

export default cartSlice.reducer;
