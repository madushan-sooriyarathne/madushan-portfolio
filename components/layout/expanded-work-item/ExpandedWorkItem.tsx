import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import Button from "../../button/Button";
import TechStackItem from "../../tech-stack-item/TechStackItem";

import {
  Wrapper,
  Image,
  DetailsWrapper,
  TitleWrapper,
  WorkType,
  TechStackGroup,
  StatusBadge,
  WorkDescription,
  ButtonWrapper,
} from "./ExpandedWorkItemStyles";
import { useEffect } from "react";

interface Props {
  workItem: DetailedWorkItem;
}

const ExpandedWorkItem: React.FC<Props> = ({
  workItem,
}: Props): JSX.Element => {
  const handleRedirect = (): void => {
    window.open(workItem.url, "_blank");
  };

  useEffect((): void => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <Image src={workItem.image} />
      <DetailsWrapper>
        <TitleWrapper>
          <HeadingPrimary>{workItem.name}</HeadingPrimary>
          <WorkType>{workItem.type}</WorkType>
        </TitleWrapper>
        <TechStackGroup>
          {workItem.stack.map((item) => (
            <TechStackItem key={item.stackItemId} item={item} />
          ))}
        </TechStackGroup>
        <StatusBadge status={workItem.status.toLowerCase().replace(" ", "-")}>
          {workItem.status}
        </StatusBadge>
        <WorkDescription>{workItem.description}</WorkDescription>
        <ButtonWrapper>
          <Button onClick={handleRedirect}>Visit Project</Button>
        </ButtonWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default ExpandedWorkItem;
