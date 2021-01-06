import styled from "styled-components";

const HeroSection = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "ct im";

  gap: 5rem;

  ${(props) => props.theme.responsiveMedium} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "ct"
      "im";
  }
`;

const TextWrapper = styled.div`
  grid-area: ct;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20rem;

  ${(props) => props.theme.responsiveLarge} {
    padding-left: 10rem;
  }

  ${(props) => props.theme.responsiveMedium} {
    padding-left: 0;
    padding-top: 10rem;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.theme.responsiveMedium} {
    align-items: center;
  }

  & > h3 {
    width: 80%;
  }

  ${(props) => props.theme.responsiveLarger} {
    & > h3 {
      width: 100%;
    }
  }

  ${(props) => props.theme.responsiveMedium} {
    & > h3 {
      text-align: center;
    }
  }
`;

const CTAHeading = styled.h1`
  font-size: 10rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colorWhite};
  transition: color 0.2s ease-in-out;

  ${(props) => props.theme.responsivePhone} {
    font-size: 7rem;
  }
`;

const SocialMediasWrapper = styled.div`
  margin-top: 10rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  gap: 1rem;
`;

const SocialMediaHeading = styled.p`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontSecondary};
`;

const SocialIconGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

const SocialIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colorWhite};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  grid-area: im;

  width: 100%;
  height: 100%;
  min-height: 70rem;
  background-image: url("/static/img/low-key-portrait.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export {
  HeroSection,
  TextWrapper,
  CTAWrapper,
  CTAHeading,
  SocialMediasWrapper,
  SocialMediaHeading,
  SocialIconGroup,
  SocialIcon,
  ImageWrapper,
};
