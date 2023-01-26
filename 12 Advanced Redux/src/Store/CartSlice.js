import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.item = action.payload.item;
      state.totalQuantity = action.payload.totalQuantity;
      state.changed = false;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.changed = true;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.item.find((item) => item.id === id);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemToCart, replaceCart } =
  cartSlice.actions;
