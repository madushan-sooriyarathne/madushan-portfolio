import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";
import {
  HeroSection,
  TextWrapper,
  CTAWrapper,
  CTAHeading,
  SocialMediasWrapper,
  SocialMediaHeading,
  SocialIconGroup,
  SocialIcon,
  ImageWrapper,
} from "./HeroBannerStyles";

const HeroBanner = () => {
  const socialLinks = [
    { name: "linkedin", url: "", id: 0 },
    { name: "github", url: "", id: 1 },
    { name: "instagram", url: "", id: 2 },
    { name: "facebook", url: "", id: 3 },
  ];

  return (
    <HeroSection>
      <TextWrapper>
        <CTAWrapper>
          <HeadingPrimary>Hello! I'm</HeadingPrimary>
          <CTAHeading>Madushan</CTAHeading>
          <HeadingSecondary>
            Creative Designer & Full Stack Web Developer
          </HeadingSecondary>
          <HeadingSecondary>from Colombo, Sri Lanka.</HeadingSecondary>
          <SocialMediasWrapper>
            <SocialMediaHeading>Find me on</SocialMediaHeading>
            <SocialIconGroup>
              {socialLinks.map((link) => (
                <a href={link.url} target="_blank" rel="noopener">
                  <SocialIcon>
                    <use
                      xlinkHref={`/static/svg/sprites.svg#${link.name}`}
                    ></use>
                  </SocialIcon>
                </a>
              ))}
            </SocialIconGroup>
          </SocialMediasWrapper>
        </CTAWrapper>
      </TextWrapper>

      <ImageWrapper />
    </HeroSection>
  );
};

export default HeroBanner;
