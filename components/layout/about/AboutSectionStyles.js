import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-areas: "ab qo";
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

const QuoteWrapper = styled.div`
  grid-area: qo;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

const QuoteGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem;

  &::before {
    content: "";
    position: absolute;
    top: -4rem;
    left: -1.4rem;
    width: 50%;
    height: 60%;
    background-image: url("/static/img/quote.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.5;
  }

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Quote = styled.p`
  font-size: 5rem;
  font-weight: 700;
`;

const QuoteAuthor = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

export {
  Section,
  TextWrapper,
  Description,
  QuoteWrapper,
  QuoteGroup,
  Quote,
  QuoteAuthor,
};
