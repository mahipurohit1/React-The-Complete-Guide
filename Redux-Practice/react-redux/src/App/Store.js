import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Components/Cake/CakeSlice";
import iceCreamReducer from "../Components/Icecream/IceCreamSlice";

// const reduxLogger = require("redux-logger");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

// module.exports = store;
export default store;
