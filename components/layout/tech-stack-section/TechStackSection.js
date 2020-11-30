import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Section, ContentWrapper } from "./TechStackSectionStyles";

const TechStackSection = () => {
  return (
    <Section>
      <ContentWrapper>
        <TitleGroup>
          <HeadingPrimary>What I use</HeadingPrimary>
          <HeadingSub>
            This is my current go-to stack. This can change time to time.
          </HeadingSub>
        </TitleGroup>
      </ContentWrapper>
    </Section>
  );
};

export default TechStackSection;
