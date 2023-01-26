import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./CakeSlice";

function CakeView() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>No of cake {noOfCakes}</div>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        ordered cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        restored cake
      </button>
    </>
  );
}

export default CakeView;
