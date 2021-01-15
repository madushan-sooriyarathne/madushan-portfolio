import styled from "styled-components";

const Section = styled.div`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const WorkGroup = styled.div`
  justify-self: stretch;
  display: grid;
  grid-template-columns: repeat(
    3,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  gap: 3rem;
  padding: 5rem 0;

  ${(props) => props.theme.responsive.medium} {
    grid-template-columns: repeat(
      2,
      [col-start] minmax(min-content, 1fr) [col-end]
    );
  }

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

export { Section, WorkGroup };
