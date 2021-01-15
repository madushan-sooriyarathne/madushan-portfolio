import { useState } from "react";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import Skeleton from "../skeleton/Skeleton";
import {
  ItemWrapper,
  Image,
  DetailsWrapper,
  TitleWrapper,
  WorkType,
  StatusBadge,
} from "./WorkItemStyles";

interface Props {
  workItem: WorkItem;
  onClick: (workId: string) => void;
}

const WorkItem: React.FC<Props> = ({
  workItem,
  onClick,
}: Props): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleLoad = (): void => {
    setLoaded(true);
  };

  return (
    <ItemWrapper
      onClick={(): void => {
        onClick(workItem.workId);
      }}
    >
      <Image
        src={workItem.image}
        onLoad={handleLoad}
        style={loaded ? {} : { display: "none" }}
      />
      {!loaded && <Skeleton />}

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
