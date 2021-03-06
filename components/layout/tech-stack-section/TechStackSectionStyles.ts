import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;
  padding: 3rem 10rem;
  min-height: 100%;

  ${(props) => props.theme.responsive.largest} {
    padding: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  gap: 5rem;
  align-items: start;
  justify-items: start;

  padding: 5rem;

  ${(props) => props.theme.responsive.medium} {
    grid-template-columns: 1fr;
  }

  ${(props) => props.theme.responsive.small} {
    padding: 0 0 5rem 0;
  }
`;

const StackGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.colorBlackLight};

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StackHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;

  align-self: center;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  ${(props) => props.theme.responsive.medium} {
    justify-content: center;
  }
`;

export { Section, ContentWrapper, StackGroup, StackHeading, ItemsWrapper };
