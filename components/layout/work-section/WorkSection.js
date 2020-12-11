import { useRouter } from "next/router";

import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Section, WorkGroup } from "./WorkSectionStyles";
import WorkItem from "../../work-item/WorkItem";

const WorkSection = ({ works }) => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(`/work/${route}`);
  };

  return (
    <Section>
      <TitleGroup centered>
        <HeadingPrimary>My Recent Work.</HeadingPrimary>
        <HeadingSub>Check what I've been doing lately</HeadingSub>
      </TitleGroup>
      <WorkGroup>
        {works.map((item) => (
          <WorkItem workItem={item} onClick={handleClick} key={item.workId} />
        ))}
      </WorkGroup>
    </Section>
  );
};

export default WorkSection;
