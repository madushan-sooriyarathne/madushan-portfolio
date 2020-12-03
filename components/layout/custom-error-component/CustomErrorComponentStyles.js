import styled from "styled-components";
import { animated } from "react-spring";

const Wrapper = styled.div`
  grid-column: content-start / content-end;
  min-height: ${(props) => `calc(100vh - ${props.theme.footerHeight})`};
  padding: 10rem;
  padding-top: ${(props) => `calc(${props.theme.headerHeight} + 5rem)`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const Image404 = styled.img`
  height: 40rem;
`;

export { Wrapper, Image404 };
