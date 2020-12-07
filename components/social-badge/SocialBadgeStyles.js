import styled from "styled-components";

const Badge = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns:
    [logo-start] minmax(min-content, 20%) [logo-end text-start] minmax(
      min-content,
      1fr
    )
    [text-end];
  gap: 2rem;
  align-items: center;
  justify-items: start;
  padding: 2rem;
  background-color: transparent;
  border: ${(props) => `2px solid ${props.theme.colorWhite}`};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorWhite};
  }

  &:hover > p {
    color: ${(props) => props.theme.colorBlack};
  }

  &:hover > svg {
    fill: ${(props) => props.theme.colorBlack};
    transform: scale(1.1);
  }
`;

const Logo = styled.svg`
  fill: ${(props) => props.theme.colorWhite};
  width: 3rem;
  height: 3rem;
  justify-self: center;

  transition: transform 0.3s ease-in-out, fill 0.3s ease;
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: inherit;
  transition: color 0.3s ease;
`;

export { Badge, Logo, Text };
