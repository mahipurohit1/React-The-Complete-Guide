import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./IceCreamSlice";

function IceCreamView() {
  const noOfIceCream = useSelector((state) => {
    return state.iceCream.noOfIceCream;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div>no of iceCream {noOfIceCream}</div>
      <button onClick={() => dispatch(ordered())}>ordered iceCream</button>
      <button onClick={() => dispatch(restocked(5))}>restored iceCream</button>
    </div>
  );
}

export default IceCreamView;
