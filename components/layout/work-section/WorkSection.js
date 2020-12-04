import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Section, WorkGroup } from "./WorkSectionStyles";
import WorkItem from "../../work-item/WorkItem";

import { workItems } from "../../../data/data";

const WorkSection = () => {
  console.log(workItems);
  return (
    <Section>
      <TitleGroup centered>
        <HeadingPrimary>My Recent Work.</HeadingPrimary>
      </TitleGroup>
      <WorkGroup>
        {workItems.map((item) => (
          <WorkItem workItem={item} key={item.id} />
        ))}
      </WorkGroup>
    </Section>
  );
};

export default WorkSection;
