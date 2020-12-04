import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  align-items: start;
  justify-items: start;

  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colorBlackLight};
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
  color: ${(props) => props.theme.colorGray};
`;

const StatusBadge = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0.5rem 1rem;
  border-radius: 3px;

  color: ${(props) =>
    props.status === "in-development"
      ? props.theme.colorWarning
      : props.status === "finished"
      ? props.theme.colorSuccess
      : props.theme.colorDanger};
  background-color: ${(props) =>
    `rgba(${
      props.status === "in-development"
        ? props.theme.colorWarningRGB
        : props.status === "finished"
        ? props.theme.colorSuccessRGB
        : props.theme.colorDangerRGB
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
