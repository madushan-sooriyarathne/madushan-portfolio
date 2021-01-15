import styled from "styled-components";

interface StatusBadgeProps {
  status: string;
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  align-items: start;
  justify-items: start;

  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.colorBlackLight};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const WorkType = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorGrayLight};
`;

const StatusBadge = styled.p<StatusBadgeProps>`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0.5rem 1rem;
  border-radius: 3px;

  color: ${(props) =>
    props.status === "in-development"
      ? props.theme.colors.colorWarning
      : props.status === "finished"
      ? props.theme.colors.colorSuccess
      : props.theme.colors.colorDanger};
  background-color: ${(props) =>
    `rgba(${
      props.status === "in-development"
        ? props.theme.colors.colorWarningRGB
        : props.status === "finished"
        ? props.theme.colors.colorSuccessRGB
        : props.theme.colors.colorDangerRGB
    }, 0.3)`};
`;

export {
  ItemWrapper,
  Image,
  DetailsWrapper,
  TitleWrapper,
  StatusBadge,
  WorkType,
};
