import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSpring, useTrail } from "react-spring";

import { navBarLinks } from "../../../data/data";

import {
  HeaderWrapper,
  Logo,
  MenuButton,
  SVGWrapper,
  LineOne,
  LineThree,
  LineTwo,
  NavBar,
  NavButtonGroup,
  NavLinkWrapper,
  NavBarItem,
} from "./HeaderStyles";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const navBarProps = useSpring({
    transform: open ? `translateX(0)` : `translateX(-100%)`,
  });

  const trail = useTrail(navBarLinks.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 500,
  });

  const handleMenuToggle = (event) => {
    if (open) window.scroll(0, 0);
    setOpen((prvState) => !prvState);
  };

  const handleRouteChange = (route) => {
    setTimeout(() => {
      router.push(route);
    }, 500);
    setOpen(false);
  };

  return (
    <>
      <HeaderWrapper menuOpened={open}>
        <Link href="/">
          <Logo>Madushan Sooriyarathne</Logo>
        </Link>
        <MenuButton onClick={handleMenuToggle}>
          <SVGWrapper width="50" height="50" viewBox="0 0 100 100">
            <LineOne
              open={open}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <LineTwo open={open} d="M 20,50 H 80" />
            <LineThree
              open={open}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </SVGWrapper>
        </MenuButton>
      </HeaderWrapper>
      <NavBar
        style={{ transform: navBarProps.transform.interpolate((x) => x) }}
      >
        <NavButtonGroup>
          {trail.map(({ x, height, ...rest }, index) => (
            <NavLinkWrapper
              onClick={() => handleRouteChange(navBarLinks[index].route)}
              key={index}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0, ${x}px, 0)`),
              }}
            >
              <NavBarItem styled={{ height }}>
                {navBarLinks[index].name}
              </NavBarItem>
            </NavLinkWrapper>
          ))}
        </NavButtonGroup>
      </NavBar>
    </>
  );
};

export default Header;
