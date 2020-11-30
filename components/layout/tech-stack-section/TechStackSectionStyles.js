import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-areas: "ts im";
  gap: 5rem;
  align-items: start;
  justify-items: start;
  padding-top: ${(props) => props.theme.headerHeight};
  min-height: ${(props) => `calc(100vh - ${props.theme.footerHeight}) `};
`;

const ContentWrapper = styled.div`
  grid-area: ts;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 5rem;
`;

export { Section, ContentWrapper };
