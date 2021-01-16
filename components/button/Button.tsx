import { MouseEvent } from "react";
import Link from "next/link";
import { CustomButton, Arrow, ButtonText } from "./ButtonStyles";

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isBig?: boolean;
  route?: string | null;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  isBig = false,
  route = null,
}: Props): JSX.Element => {
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
