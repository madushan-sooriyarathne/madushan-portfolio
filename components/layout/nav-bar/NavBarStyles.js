import styled from "styled-components";

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: auto;
  height: 100%;

  background-color: ${(props) => props.theme.colorBlackLight};

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${(props) => props.theme.navBarFoldedWidth};
  padding: 10rem 2rem;
`;

const NavBarLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const NavBarLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(3px);
  }
`;

export { NavBarWrapper, NavBarLinkGroup, NavBarLink };
