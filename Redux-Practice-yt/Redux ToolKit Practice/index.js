const store = require("./App/Store");

const cakeActions = require("./Components/Cake/CakeSlice").cakeActions;
const iceCreamActions =
  require("./Components/Icecream/IceCreamSlice").iceCreamActions;
console.log("initial State ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("final state", store.getState());
});
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(3));
unSubscribe();
