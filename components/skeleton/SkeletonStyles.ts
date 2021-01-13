import styled, { keyframes } from "styled-components";

interface ElementProps {
  readonly skeletonHeight: string;
}

const animation = keyframes`
    from  {
        background-position: -200px 0;
    }
    to {
        background-position: calc(200px + 100%) 0;
    }
`;

const Element = styled.span<ElementProps>`
  width: 100%;
  padding-top: ${(props) => props.skeletonHeight || "56.25%"};
  background-color: ${(props) => props.theme.colors.colorGrayLight};
  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.colorGrayLight}, ${props.theme.colors.colorGray}, ${props.theme.colors.colorGrayLight})`};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  display: block;
  line-height: 1;
  animation: ${animation} 1s ease-in-out infinite;
`;

export { Element };
