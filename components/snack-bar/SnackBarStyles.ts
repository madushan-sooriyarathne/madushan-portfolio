import styled from "styled-components";

interface BarProps {
  show: string | null;
}

const Bar = styled.div<BarProps>`
  position: fixed;
  left: 5rem;
  bottom: 5rem;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(calc(5rem + 100%))"};

  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-items: start;

  padding: 2rem;
  width: 40rem;
  background-color: ${(props) => props.theme.colors.colorGray};

  transition: transform 0.2s ease-in-out;
`;

const Message = styled.p`
  grid-column: 1 / 2;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorWhite};
`;

const CloseButton = styled.div`
  grid-column: 2 /3;
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 50%;
    transform: scale(0);
    transform-origin: 50% 50%;
    background-color: ${(props) => props.theme.colors.colorGrayLight};
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.colorWhite};
`;

export { Bar, Message, CloseButton, Icon };
