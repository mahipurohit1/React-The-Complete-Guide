import useCounter from "../Hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter("decrement");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
