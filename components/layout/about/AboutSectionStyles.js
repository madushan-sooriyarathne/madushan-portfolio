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
  min-height: 100%;

  ${(props) => props.theme.responsiveMediumHigh} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ab"
      "qo";
  }
`;

const TextWrapper = styled.div`
  grid-area: ab;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 5rem;

  ${(props) => props.theme.responsiveMediumHigh} {
    & > * {
      text-align: center;
      align-items: center;
    }
  }

  ${(props) => props.theme.responsiveSmall} {
    padding: 0;
  }
`;

const Description = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;

  margin: 5rem 0 8rem 0;
`;

const QuickLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.theme.responsiveMediumHigh} {
    align-items: center;
    align-self: center;
  }
`;

const QuickLinksGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  ${(props) => props.theme.responsiveMediumHigh} {
    justify-content: center;
  }
`;

const QuickLink = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  outline: none;

  margin-bottom: 1rem;

  transition: transform 0.2s ease-out;

  &:hover {
    transform: translateX(2px);
  }
`;

const QuoteWrapper = styled.div`
  grid-area: qo;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  ${(props) => props.theme.responsiveMedium} {
    padding: 0;
  }
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

  ${(props) => props.theme.responsiveMediumHigh} {
    align-items: center;
    padding: 2rem;
  }
`;

const Quote = styled.p`
  font-size: 5rem;
  font-weight: 700;

  ${(props) => props.theme.responsiveMediumHigh} {
    text-align: center;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

export {
  Section,
  TextWrapper,
  Description,
  QuickLinksWrapper,
  QuickLinksGroup,
  QuickLink,
  QuoteWrapper,
  QuoteGroup,
  Quote,
  QuoteAuthor,
};
