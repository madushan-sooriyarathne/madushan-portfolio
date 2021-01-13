import { ChangeEvent, useState } from "react";

type InputStateOutput = [
  string,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => void
];

/**
 * Custom hook to manage states of Input Fields or Text Area Fields
 * @function
 * @param {string} initialValue Initial value for input state
 * @returns {InputStateOutput} - Custom hook values to use with Input fields
 */
const useInputState = (initialValue: string = ""): InputStateOutput => {
  const [value, setValue] = useState<string>(initialValue);

  /**
   * Update the state using target's value of given event
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - change event from input field or text area field
   */
  const updateValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue(event.target.value);
  };

  /**
   * Set value to empty string. thus reset the input field
   */
  const resetValue = (): void => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export default useInputState;
