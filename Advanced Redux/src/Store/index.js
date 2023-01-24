import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UiSlice";
import CartSlice from "./CartSlice";
const store = configureStore({
  reducer: { ui: uiSlice, cart: CartSlice },
});
export default store;
