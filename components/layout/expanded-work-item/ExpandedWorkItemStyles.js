import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: content-start / content-end;
  padding: 0 10rem;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`;

const DetailsWrapper = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: max-content;
  gap: 2rem;
  align-items: start;
  justify-items: start;
  background-color: ${(props) => props.theme.colorBlackLight};

  padding: 2rem;
`;

const TitleWrapper = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const WorkType = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorGray};
`;

const TechStackGroup = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;

  justify-self: end;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const StatusBadge = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 /3;
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

const WorkDescription = styled.p`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;

  & a {
    color: inherit;
    outline: none;
    text-decoration: none;
    padding: 2px 3px;
    border-bottom: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.2);
    transition: border-bottom 0.2s ease;

    &:hover {
      border-bottom: ${(props) => `1px solid ${props.theme.colorWhite}`};
    }
  }
`;

const ButtonWrapper = styled.p`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;

export {
  Wrapper,
  Image,
  DetailsWrapper,
  TitleWrapper,
  WorkType,
  TechStackGroup,
  StatusBadge,
  WorkDescription,
  ButtonWrapper,
};
