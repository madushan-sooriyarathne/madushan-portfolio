import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";
import TechStackItem from "../../tech-stack-item/TechStackItem";

import {
  Section,
  ContentWrapper,
  StackGroup,
  StackHeading,
  ItemsWrapper,
} from "./TechStackSectionStyles";

const TechStackSection = ({ stacks }) => {
  return (
    <Section>
      <TitleGroup centered={true}>
        <HeadingPrimary>What I use.</HeadingPrimary>
        <HeadingSub>
          This is my current go-to stack. This can change time to time.
        </HeadingSub>
      </TitleGroup>
      <ContentWrapper>
        {stacks.map((stack) => (
          <StackGroup key={stack.stackId}>
            <StackHeading>{stack.stackName}</StackHeading>
            <ItemsWrapper>
              {stack.stackItems.map((item) => (
                <TechStackItem item={item} key={item.stackItemId} />
              ))}
            </ItemsWrapper>
          </StackGroup>
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default TechStackSection;
