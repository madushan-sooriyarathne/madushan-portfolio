import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: max-content;
  align-items: center;
  justify-items: center;
  padding-top: ${(props) => `calc(${props.theme.headerHeight} + 5rem)`};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `[full-start] minmax(calc(${props.theme.navBarFoldedWidth} + 5rem), 1fr) [content-start] repeat(8, [col-start] minmax(min-content, 18rem) [col-end]) [content-end] minmax(5rem, 1fr) [full-end] `};
  grid-auto-rows: max-content;
`;

export { PageWrapper, ContentWrapper };
