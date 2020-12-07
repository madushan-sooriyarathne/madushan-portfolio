import { Wrapper, Input, Label, TextArea } from "./InputFieldStyles";

const InputField = ({
  name,
  onChange,
  value,
  type = "text",
  textarea = false,
  required = true,
}) => {
  return (
    <Wrapper>
      {textarea ? (
        <TextArea
          id={name}
          name={name}
          placeholder={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <Input
          id={name}
          name={name}
          placeholder={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="disable"
        />
      )}

      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
};

export default InputField;
