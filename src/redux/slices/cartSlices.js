import { createSlice } from "@reduxjs/toolkit";

const loadCartItemsFromLocalStorage = () => {
  const savedCartItems = localStorage.getItem("cartItems");
  return savedCartItems ? JSON.parse(savedCartItems) : [];
};

const saveCartItemsToLocalStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartItemsFromLocalStorage(),
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      saveCartItemsToLocalStorage(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartItemsToLocalStorage(state.items);
    },
    clearCartItems(state) {
      state.items = [];
      saveCartItemsToLocalStorage(state.items); // Salvează starea goală în localStorage
    },
  },
});

export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.items.length;
export const { addToCart, removeFromCart, clearCartItems } = cartSlice.actions; // Adaugă clearCartItems
export default cartSlice.reducer;
