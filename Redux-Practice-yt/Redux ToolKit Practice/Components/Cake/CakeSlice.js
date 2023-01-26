const CreateSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  noOfCakes: 10,
};
const cakeSlice = CreateSlice({
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
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
