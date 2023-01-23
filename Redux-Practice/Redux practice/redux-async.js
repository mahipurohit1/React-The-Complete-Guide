const redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";
const FETCH_DATA_SUCCEEDED = "FETCH_DATA_SUCCEEDED";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const fetch_data_requested = function () {
  return {
    type: FETCH_DATA_REQUESTED,
  };
};
const fetch_data_succeeded = function (user) {
  return {
    type: FETCH_DATA_SUCCEEDED,
    payload: user,
  };
};
const fetch_data_failed = function (error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: error,
  };
};

const reducer = function (prevState = initialState, action) {
  if (action.type === FETCH_DATA_REQUESTED) {
    return {
      ...prevState,
      isLoading: true,
    };
  }
  if (action.type === FETCH_DATA_SUCCEEDED) {
    return {
      data: action.payload,
      error: "",
      isLoading: false,
    };
  }

  if (action.type === FETCH_DATA_FAILED) {
    return {
      data: [],
      isLoading: false,
      error: action.payload,
    };
  }
  return prevState;
};
const fetchUser = function () {
  return function (dispatch) {
    // dispatch(fetch_data_requested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        const userName = response.data.map((user) => user.name);
        console.log(userName);

        dispatch(fetch_data_succeeded(userName));
        // dispatch({
        //   type: FETCH_DATA_SUCCEEDED,
        //   payload: userName,
        // });
      })
      .catch((error) => {
        dispatch(fetch_data_failed(error.message));
        console.log("sss");
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(fetchUser());
