import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const Dispatch = useDispatch();

  const incrementHandlerby5 = () => {
    Dispatch({ type: "increment", value: 5 });
  };
  const incrementHandler = () => {
    Dispatch({ type: "increment", value: 1 });
  };
  const decrementHandler = () => {
    Dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerby5}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
