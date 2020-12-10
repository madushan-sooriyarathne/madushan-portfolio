import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from  {
        background-position: -200px 0;
    }
    to {
        background-position: calc(200px + 100%) 0;
    }
`;

const Element = styled.span`
  width: 100%;
  padding-top: ${(props) => props.height || "56.25%"};
  background-color: ${(props) => props.theme.colorGrayLight};
  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colorGrayLight}, ${props.theme.colorGray}, ${props.theme.colorGrayLight})`};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  display: block;
  line-height: 1;
  animation: ${animation} 1s ease-in-out infinite;
`;

export { Element };
