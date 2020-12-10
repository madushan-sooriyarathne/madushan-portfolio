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

const WorkItem = ({ workItem, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
    setLoaded(true);
  };

  return (
    <ItemWrapper
      onClick={() => {
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
