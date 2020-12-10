import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  padding: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colorGrayLight};
  box-shadow: ${(props) => `0 4px 8px 0 ${props.theme.colorBlack}`};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colorBlack};
`;

export { Wrapper, Icon };
