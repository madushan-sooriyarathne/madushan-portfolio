import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";
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

import { socialLinks } from "../../../data/data";

const HeroBanner: React.FC = (): JSX.Element => {
  return (
    <HeroSection>
      <TextWrapper>
        <CTAWrapper>
          <HeadingPrimary>Hello! I'm</HeadingPrimary>
          <CTAHeading>Madushan</CTAHeading>
          <HeadingSub>
            Creative Designer & Full Stack Web Developer based in Colombo, Sri
            Lanka.
          </HeadingSub>
          <SocialMediasWrapper>
            <SocialMediaHeading>Find me on</SocialMediaHeading>
            <SocialIconGroup>
              {socialLinks.map((link) => (
                <a href={link.url} target="_blank" rel="noopener" key={link.id}>
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
