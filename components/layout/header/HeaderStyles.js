import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: transparent;
`;

const Logo = styled.p`
  font-family: ${(props) => props.theme.fontSecondary};
  font-size: 5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }
`;

export { HeaderWrapper, Logo };
