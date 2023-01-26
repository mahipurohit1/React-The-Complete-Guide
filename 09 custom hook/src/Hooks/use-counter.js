import { useEffect, useState } from "react";
const useCounter = (value) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === "increment") setCounter((prevCounter) => prevCounter + 1);
      if (value === "decrement") setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);
  return counter;
};
export default useCounter;
