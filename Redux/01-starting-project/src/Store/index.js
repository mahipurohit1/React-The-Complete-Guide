// const redux = require("redux");
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, ShowCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const CounterReducer = (state = { initialState }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
      ShowCounter: state.ShowCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      ShowCounter: state.ShowCounter,
    };
  }
  return state;
};

const store = createStore(CounterReducer);

// const CounterSubscriber = () => {
//   store.getState();
//   console.log(store.getState());
// };

// store.subscriber(CounterSubscriber);
// store.despatch({ type: "increment" });
// store.despatch({ type: "decrement" });
export default store;
