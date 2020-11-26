import Link from "next/link";
import { HeaderWrapper, Logo } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Logo>Madushan Sooriyarathne</Logo>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
