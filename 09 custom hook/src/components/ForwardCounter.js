import useCounter from "../Hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter("increment");
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
