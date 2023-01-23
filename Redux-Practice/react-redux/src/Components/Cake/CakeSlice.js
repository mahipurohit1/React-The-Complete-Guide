// const CreateSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (prevState) => {
      prevState.noOfCakes--;
    },
    restocked: (prevState, action) => {
      prevState.noOfCakes = prevState.noOfCakes + action.payload;
    },
  },
});

// export default cakeSlice.reducer;
export default cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
export const { ordered, restocked } = cakeSlice.actions;
