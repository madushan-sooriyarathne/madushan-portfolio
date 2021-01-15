import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

const animate = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    }

    to {
       opacity: 0;
       visibility: hidden;
    }
`;

const Overlay = styled(animated.div)`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 25;
  background-color: ${(props) => props.theme.colors.colorBlack};

  animation: ${animate} 0.3s forwards;
`;

export { Overlay };
