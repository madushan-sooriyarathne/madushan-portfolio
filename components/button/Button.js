import { CustomButton, Arrow, ButtonText } from "./ButtonStyles";

const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  isBig = false,
}) => {
  return (
    <CustomButton type={type} onClick={onClick} disabled={disabled}>
      <ButtonText isBig={isBig}>{children}</ButtonText>
      <Arrow />
    </CustomButton>
  );
};

export default Button;
