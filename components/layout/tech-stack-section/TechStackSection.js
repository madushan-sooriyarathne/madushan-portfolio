import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import {
  Section,
  ContentWrapper,
  StackGroup,
  StackHeading,
  TechItem,
  TechItemLogo,
  TechItemName,
  ItemsWrapper,
} from "./TechStackSectionStyles";

const techStack = [
  {
    name: "Frontend Development",
    stackId: 0,
    items: [
      { name: "Javascript", logo: "javascript.svg", id: 0 },
      { name: "React", logo: "react.svg", id: 1 },
      { name: "Next.js", logo: "next-js.svg", id: 2 },
      { name: "Redux", logo: "redux.svg", id: 3 },
      { name: "Sass", logo: "sass.svg", id: 4 },
    ],
  },
  {
    name: "Backend Development",
    stackId: 1,
    items: [
      { name: "Node.js", logo: "nodejs.svg", id: 0 },
      { name: "Express", logo: "express.svg", id: 1 },
      { name: "Python", logo: "python.svg", id: 2 },
      { name: "Flask", logo: "flask.svg", id: 3 },
    ],
  },
  {
    name: "Database Solutions",
    stackId: 0,
    items: [
      { name: "MongoDB", logo: "mongodb.svg", id: 0 },
      { name: "PostgrSQL", logo: "postgresql.svg", id: 1 },
    ],
  },
  {
    name: "Creative Design",
    stackId: 0,
    items: [
      { name: "Figma", logo: "figma.svg", id: 0 },
      { name: "Adobe Illustrator", logo: "ai.svg", id: 1 },
      { name: "Adobe Photoshop", logo: "ps.svg", id: 2 },
    ],
  },
];

const TechStackSection = () => {
  return (
    <Section>
      <TitleGroup centered={true}>
        <HeadingPrimary>What I use</HeadingPrimary>
        <HeadingSub>
          This is my current go-to stack. This can change time to time.
        </HeadingSub>
      </TitleGroup>
      <ContentWrapper>
        {techStack.map((stack) => (
          <StackGroup key={stack.stackId}>
            <StackHeading>{stack.name}</StackHeading>
            <ItemsWrapper>
              {stack.items.map((item) => (
                <TechItem key={item.id}>
                  <TechItemLogo
                    src={`/static/svg/${item.logo}`}
                    alt={item.name}
                  />
                  <TechItemName>{item.name}</TechItemName>
                </TechItem>
              ))}
            </ItemsWrapper>
          </StackGroup>
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default TechStackSection;
