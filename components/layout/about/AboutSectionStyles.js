import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-areas: "ab im";
  gap: 5rem;
  padding: ${(props) =>
    `${props.theme.headerHeight} 0 ${props.theme.footerHeight} 0`};
  height: 100vh;
`;

const TextWrapper = styled.div`
  grid-area: ab;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5rem;
`;

const Description = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;

  margin-top: 5rem;
`;

const ImageWrapper = styled.div`
  grid-area: im;
  width: 100%;
  height: 100%;
  background-image: url("/static/img/about-cover.jpg");
  background-size: cover;
  background-position: center center;
`;

export { Section, TextWrapper, Description, ImageWrapper };
