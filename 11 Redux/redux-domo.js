const redux = require("redux");

const CounterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(CounterReducer);

const CounterSubscriber = () => {
  store.getState();
  console.log(store.getState());
};

store.subscribe(CounterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
