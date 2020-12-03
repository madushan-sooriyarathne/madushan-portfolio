import Link from "next/link";
import { CustomButton, Arrow, ButtonText } from "./ButtonStyles";

const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  isBig = false,
  route = null,
}) => {
  return (
    <>
      {route ? (
        <Link href={route}>
          <CustomButton>
            <ButtonText isBig={isBig}>{children}</ButtonText>
            <Arrow />
          </CustomButton>
        </Link>
      ) : (
        <CustomButton type={type} onClick={onClick} disabled={disabled}>
          <ButtonText isBig={isBig}>{children}</ButtonText>
          <Arrow />
        </CustomButton>
      )}
    </>
  );
};

export default Button;
