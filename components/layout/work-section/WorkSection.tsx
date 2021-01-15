import { NextRouter, useRouter } from "next/router";

import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Section, WorkGroup } from "./WorkSectionStyles";
import WorkItem from "../../work-item/WorkItem";

interface Props {
  works: WorkItem[];
}

const WorkSection: React.FC<Props> = ({ works }: Props): JSX.Element => {
  const router: NextRouter = useRouter();

  const handleClick = (route: string): void => {
    router.push(`/work/${route}`);
  };

  return (
    <Section>
      <TitleGroup centered>
        <HeadingPrimary>My Recent Work.</HeadingPrimary>
        <HeadingSub>Check what I've been doing lately</HeadingSub>
      </TitleGroup>
      <WorkGroup>
        {works.map((item: WorkItem) => (
          <WorkItem workItem={item} onClick={handleClick} key={item.workId} />
        ))}
      </WorkGroup>
    </Section>
  );
};

export default WorkSection;
