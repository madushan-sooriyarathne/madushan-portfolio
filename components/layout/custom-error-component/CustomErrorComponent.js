import { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import Button from "../../button/Button";

import {
  Wrapper,
  FormGroup,
  LargeInputField,
} from "./CustomErrorComponentStyles";

const getNumbers = () => {
  const FirstNumber = Math.floor(Math.random() * 404);
  const SecondNumber = 404 - FirstNumber;

  return [FirstNumber, SecondNumber];
};

const CustomErrorComponent = () => {
  const [split404, setNumbers] = useState(getNumbers());
  const [answer, updateAnswer, resetAnswer] = useInputState();
  const [correct, setCorrect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(answer) !== 404) {
      setCorrect(false);
      resetAnswer();
    } else {
      setCorrect(true);
    }
  };

  return (
    <Wrapper>
      <HeadingPrimary>Please do the math</HeadingPrimary>
      <HeadingPrimary>{split404.join(" + ")}</HeadingPrimary>
      <FormGroup onSubmit={handleSubmit}>
        <LargeInputField
          type="text"
          placeholder="Answer"
          autocomplete={false}
          onChange={updateAnswer}
          value={answer}
          required
        />
        <Button isBig={true} type="submit">
          Continue
        </Button>
      </FormGroup>
    </Wrapper>
  );
};

export default CustomErrorComponent;
