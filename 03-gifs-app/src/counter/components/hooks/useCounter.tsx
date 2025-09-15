import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setcounter] = useState(initialValue);

  const handleAdd = () => {
    setcounter(counter + 1);
  };

  const handleSubstract = () => {
    setcounter((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setcounter(initialValue);
  };
  return {
    //Values
    counter,

    //Methods
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
