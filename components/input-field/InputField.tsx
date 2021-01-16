import { ChangeEvent } from "react";
import { Wrapper, Input, Label, TextArea } from "./InputFieldStyles";

interface Props {
  name: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  type?: string;
  pattern?: string;
  textarea?: boolean;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  name,
  onChange,
  value,
  pattern,
  type = "text",
  textarea = false,
  required = true,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      {textarea ? (
        <TextArea
          id={name}
          name={`${name}  ${required ? "(Required)" : ""}`}
          placeholder={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <Input
          id={name}
          name={name}
          placeholder={`${name}  ${required ? "(Required)" : ""}`}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          autoComplete="disable"
        />
      )}

      <Label htmlFor={name}>{`${name}  ${required ? "(Required)" : ""}`}</Label>
    </Wrapper>
  );
};

export default InputField;
