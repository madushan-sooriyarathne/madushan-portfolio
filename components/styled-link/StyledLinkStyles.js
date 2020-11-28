import styled from "styled-components";

const LinkWrapper = styled.a`
  outline: none;
  text-decoration: underline;
  padding: 2px 5px;
  color: inherit;
  border-radius: 2px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export { LinkWrapper };
