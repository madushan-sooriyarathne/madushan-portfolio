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
        <HeadingSub>
          Both recent Client & Personal projects are here because you cannot
          draw a line between work and fun when you love your job
        </HeadingSub>
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
