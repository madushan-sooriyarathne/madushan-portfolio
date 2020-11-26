import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `[full-start] minmax(calc(${props.theme.navBarFoldedWidth} + 5rem), 1fr) [content-start] repeat(8, [col-start] minmax(min-content, 15rem) [col-end]) [content-end] minmax(5rem, 1fr) [full-end] `};
  grid-auto-rows: max-content;
`;

export default PageWrapper;
