import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: max-content;
  padding-top: ${(props) => `calc(${props.theme.sizes.headerHeight} + 3rem)`};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  grid-template-rows: 1fr;
  grid-auto-rows: max-content;
  width: 100%;
  height: 100%;
`;

export { PageWrapper, ContentWrapper };
