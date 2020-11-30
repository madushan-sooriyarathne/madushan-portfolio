import { useState } from "react";

const useInputState = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export default useInputState;
