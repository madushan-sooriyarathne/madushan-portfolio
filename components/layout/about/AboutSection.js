import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";

import {
  Section,
  TextWrapper,
  Description,
  ImageWrapper,
} from "./AboutSectionStyles";
import StyledLink from "../../styled-link/StyledLink";

const AboutSection = () => {
  return (
    <Section>
      <TextWrapper>
        <TitleGroup>
          <HeadingPrimary>About me</HeadingPrimary>
          <HeadingSecondary>Hi! I am Madushan [ma-dhu-shaa-n]</HeadingSecondary>
        </TitleGroup>
        <Description>
          I’m a Creative Designer & Full Stack Web Developer and I design and
          code beautifully simple things. and I love what I do. I really liked
          tech and interested in them when I was a kid. And I started teaching
          myself coding when I was 16. I’m quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
          <br />
          <br /> As a creative designer, I value simple content structure, clean
          design patterns, and thoughtful interactions. When it comes to
          developing stuff, I like to code things from scratch and enjoy
          bringing ideas to life with clearly written code.
          <br />
          <br /> I run a small creative marketing agency called
          <StyledLink link="https://advertaro.lk/" text="Advertaro" />
          with a partner where I’m responsible for designing and development. In
          my free time, I usually work on my personal projects or hone my craft
          by learning new stuff. If not I’m probably playing a game with my
          buddies.
        </Description>
      </TextWrapper>
      <ImageWrapper />
    </Section>
  );
};

export default AboutSection;
