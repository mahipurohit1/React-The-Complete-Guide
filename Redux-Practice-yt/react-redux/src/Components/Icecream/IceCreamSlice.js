// const { cakeActions } = require("../Cake/CakeSlice");
import { ordered as cakeActions } from "../Cake/CakeSlice";
import { createSlice } from "@reduxjs/toolkit";
// const createSlice = require("@reduxjs/toolkit").createSlice;

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
    binder.addCase(cakeActions, (prevState) => {
      prevState.noOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;
export const { ordered, restocked } = iceCreamSlice.actions;
