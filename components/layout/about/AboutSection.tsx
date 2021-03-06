import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";
import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";

import { quickLinks } from "../../../data/data";

import {
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
} from "./AboutSectionStyles";
import StyledLink from "../../styled-link/StyledLink";

const AboutSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <TextWrapper>
        <TitleGroup>
          <HeadingPrimary>About me.</HeadingPrimary>
          <HeadingSub>Hi! I am Madushan [ma-dhu-shaa-n]</HeadingSub>
        </TitleGroup>
        <Description>
          I’m a Creative Designer & Full Stack Web Developer based in Colombo,
          Sri Lanka. I design and code beautifully simple things and I love what
          I do. I really liked tech and interested in them when I was a kid. And
          I started teaching myself coding when I was 16. I’m quietly confident,
          naturally curious, and perpetually working on improving my chops one
          design problem at a time.
          <br />
          <br />
          As a Developer, I like to code things from scratch and enjoy bringing
          ideas to life with clearly written code. When It's comes to designing,
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
          <br />
          <br /> I run a small creative marketing agency called
          <StyledLink link="https://advertaro.lk/" text="Advertaro" /> with a
          partner where I’m responsible for designing and development. In my
          free time, I usually work on my personal projects or hone my craft by
          learning new stuff. If not I’m probably playing a game with my
          buddies.
        </Description>
        <QuickLinksWrapper>
          <HeadingSecondary>Quick Links</HeadingSecondary>
          <QuickLinksGroup>
            {quickLinks.map((link) => (
              <QuickLink
                href={link.url}
                key={link.id}
                target="_blank"
                rel="noopener"
              >
                {link.name}
              </QuickLink>
            ))}
          </QuickLinksGroup>
        </QuickLinksWrapper>
      </TextWrapper>
      <QuoteWrapper>
        <QuoteGroup>
          <Quote>
            Choose a job you love and you will never have to work a day in your
            life.
          </Quote>
          <QuoteAuthor>- Confucius -</QuoteAuthor>
        </QuoteGroup>
      </QuoteWrapper>
    </Section>
  );
};

export default AboutSection;
