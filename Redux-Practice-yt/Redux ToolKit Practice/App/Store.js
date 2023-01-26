const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../Components/Cake/CakeSlice");
const iceCreamReducer = require("../Components/Icecream/IceCreamSlice");
const reduxLogger = require("redux-logger");
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

module.exports = store;
