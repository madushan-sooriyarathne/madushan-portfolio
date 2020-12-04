import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import {
  ItemWrapper,
  Image,
  DetailsWrapper,
  TitleWrapper,
  WorkType,
  StatusBadge,
} from "./WorkItemStyles";

const WorkItem = ({ workItem }) => {
  console.log(workItem);
  return (
    <ItemWrapper>
      <Image src={workItem.image} />
      <DetailsWrapper>
        <TitleWrapper>
          <HeadingSecondary>{workItem.name}</HeadingSecondary>
          <WorkType>{workItem.type}</WorkType>
        </TitleWrapper>
        <StatusBadge status={workItem.status.toLowerCase().replace(" ", "-")}>
          {workItem.status}
        </StatusBadge>
      </DetailsWrapper>
    </ItemWrapper>
  );
};

export default WorkItem;
