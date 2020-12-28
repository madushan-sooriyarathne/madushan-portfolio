import { Wrapper, Input, Label, TextArea } from "./InputFieldStyles";

const InputField = ({
  name,
  onChange,
  value,
  pattern,
  type = "text",
  textarea = false,
  required = true,
}) => {
  return (
    <Wrapper>
      {textarea ? (
        <TextArea
          id={name}
          name={`${name}  ${required ? "(Required)" : ""}`}
          placeholder={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
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
