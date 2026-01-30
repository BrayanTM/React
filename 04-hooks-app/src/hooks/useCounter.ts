import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = () => {
    setcounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 1) return;
    setcounter(counter - 1);
  };

  return {
    // Properties
    counter,

    // Methods
    increment,
    decrement,
  };
};
