const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "mahipal",
  address: {
    street: "192 main street",
    city: "london",
    country: "England",
  },
};

const UPDATE_STREET = "updateStreet";
function updateStreet(street_name) {
  return {
    type: UPDATE_STREET,
    payload: street_name,
  };
}

const reducer = (prevState = initialState, action) => {
  if (action.type === UPDATE_STREET) {
    // return {
    //   ...prevState,
    //   address: {
    //     ...prevState.address,
    //     street: action.payload,
    //   },
    // };
    return produce(prevState, (draft) => {
      draft.address.street = action.payload;
    });
  }
  return prevState;
};

const createStore = redux.createStore;
const store = createStore(reducer);

console.log("initial value ", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(updateStreet("152 main street"));

unSubscribe();
