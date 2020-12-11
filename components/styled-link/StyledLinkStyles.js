import styled from "styled-components";

const LinkWrapper = styled.a`
  outline: none;
  text-decoration: none;
  padding: 2px 5px;
  color: inherit;
  background-color: transparent;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 90%;
    height: 4px;
    background-color: ${(props) => props.theme.colorGrayLight};
    transform: translateX(-50%) rotate(-2deg);
    z-index: -1;
    transition: height 0.2s ease-in-out;
  }

  &:hover::before {
    height: 80%;
  }
`;

export { LinkWrapper };
