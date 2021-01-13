import styled from "styled-components";

interface WrapperProps {
  visible: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  padding: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.colorGrayLight};
  box-shadow: ${(props) => `0 4px 8px 0 ${props.theme.colors.colorBlack}`};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.colorBlack};
`;

export { Wrapper, Icon };
