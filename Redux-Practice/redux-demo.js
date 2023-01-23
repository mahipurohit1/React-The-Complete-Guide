const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// redux in details :  action  reducer  store

// initial state

// const initialState = {
//   noOfCake: 10,
//   noOfIceCream: 20,
// };
const cakeInitialState = {
  noOfCake: 10,
};
const iceCremeInitialState = {
  noOfIceCream: 20,
};

// action :-  basically object describe what happened  in the application

const CAKE_ORDERED = "cake_ordered"; // create const to avoid typo
const CAKE_RESTORED = "cake_restored";
const ICE_CREAM_ORDERED = "ice_cream_ordered";
const ICE_CREAM_RESTORED = "ice_cream_restored";

const CakeOrdered = function () {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};
const CakeRestored = function (quantity) {
  return {
    type: CAKE_RESTORED,
    payload: quantity,
  };
};

const IceCreamOrdered = function () {
  return {
    type: ICE_CREAM_ORDERED,
    payload: 1,
  };
};
const IceCreamRestored = function (quantity) {
  return {
    type: ICE_CREAM_RESTORED,
    payload: quantity,
  };
};

// reducer  :  (prevState, action ) ->  newState

const cakeReducer = (prevState = cakeInitialState, action) => {
  if (action.type === CAKE_ORDERED) {
    return {
      ...prevState,
      noOfCake: prevState.noOfCake - 1,
    };
  }
  if (action.type === CAKE_RESTORED) {
    return {
      ...prevState,
      noOfCake: prevState.noOfCake + action.payload,
    };
  }

  return prevState;
};
const IceCremeReducer = (prevState = iceCremeInitialState, action) => {
  if (action.type === ICE_CREAM_ORDERED) {
    return {
      ...prevState,
      noOfIceCream: prevState.noOfIceCream - 1,
    };
  }
  if (action.type === ICE_CREAM_RESTORED) {
    return {
      ...prevState,
      noOfIceCream: prevState.noOfIceCream + action.payload,
    };
  }
  return prevState;
};
// create store :  hold all state of your application in one place(store)
// const redux = require("redux");
// const createStore = redux.createStore();

// const store = createStore(reducer); // it hold action and state basically a reducer function

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCreme: IceCremeReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
// get initial state
console.log("initial state", store.getState());

// update state

const unSubscribe = store.subscribe(() => {
  // console.log("update State", store.getState());
});

//dispatched method for update the state
store.dispatch({ type: CAKE_ORDERED });
store.dispatch(CakeOrdered()); // try to pass function we can manage changes in type property at one place
store.dispatch(CakeOrdered());
store.dispatch(CakeOrdered());
store.dispatch(CakeRestored(5));

store.dispatch(IceCreamOrdered());
store.dispatch(IceCreamOrdered());
store.dispatch(IceCreamOrdered());
store.dispatch(IceCreamOrdered());
store.dispatch(IceCreamRestored(5));

unSubscribe(); //to unsubscribe the store
