import styled from "styled-components";
import { animated } from "react-spring";

const HeaderWrapper = styled.header`
  position: ${(props) => (props.menuOpened ? "fixed" : "absolute")};
  top: 0;
  left: 0;

  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  background-color: transparent;
  z-index: 20;

  ${(props) => props.theme.responsiveSmall} {
    padding: 2rem 5rem;
  }
`;

const Logo = styled.p`
  font-family: ${(props) => props.theme.fontSecondary};
  font-size: 5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }

  ${(props) => props.theme.responsivePhone} {
    font-size: 4rem;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

const SVGWrapper = styled.svg`
  & > * {
    fill: none;
    stroke: ${(props) => props.theme.colorWhite};
    stroke-width: 3;
    transition: stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${(props) => props.theme.responsiveSmall} {
    width: 6rem;
    height: 6rem;
  }
`;

const LineOne = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => props.open && -134};
  stroke-width: 3;
`;

const LineTwo = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "1 60" : "60 60")};
  stroke-dashoffset: ${(props) => props.open && -30};
  stroke-width: 3;
`;

const LineThree = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => props.open && -134};
  stroke-width: 3;
`;

const NavBar = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colorBlackLight};
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLinkWrapper = styled(animated.div)`
  padding: 2rem;
  background-color: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.1)" : "transparent"};
`;

const NavBarItem = styled(animated.a)`
  font-size: 5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  opacity: 0.5;
  letter-spacing: 2px;
  cursor: pointer;

  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 1;
  }

  ${(props) => props.theme.responsiveHeightSmall} {
    font-size: 3rem;
  }
`;

export {
  HeaderWrapper,
  Logo,
  MenuButton,
  SVGWrapper,
  LineOne,
  LineTwo,
  LineThree,
  NavBar,
  NavButtonGroup,
  NavLinkWrapper,
  NavBarItem,
};
