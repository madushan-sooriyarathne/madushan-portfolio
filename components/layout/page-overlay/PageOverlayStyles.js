import styled, { keyframes } from "styled-components";

const Fade = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colorBlack};
  z-index: 10;

  opacity: 1;
  visibility: visible;

  animation: ${Fade} ease-in-out forwards 0.5s;
`;

export { Overlay };
