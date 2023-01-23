const { cakeActions } = require("../Cake/CakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (prevState) => {
      prevState.noOfIceCream--;
    },
    restocked: (prevState, action) => {
      prevState.noOfIceCream = prevState.noOfIceCream + action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (prevState) => {
  //     prevState.noOfIceCream--;
  //   },
  // },
  extraReducers: (binder) => {
    binder.addCase(cakeActions.ordered, (prevState) => {
      prevState.noOfIceCream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
