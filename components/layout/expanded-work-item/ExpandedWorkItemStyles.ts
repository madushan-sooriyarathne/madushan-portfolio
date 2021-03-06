import styled from "styled-components";

interface StatusBadgeProps {
  status: string;
}

const Wrapper = styled.div`
  grid-column: content-start / content-end;
  padding: 0 10rem;

  ${(props) => props.theme.responsive.large} {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`;

const DetailsWrapper = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "ti st"
    "ba st"
    "de de"
    "bu bu";
  grid-auto-rows: max-content;
  gap: 2rem;
  align-items: start;
  justify-items: start;
  background-color: ${(props) => props.theme.colors.colorBlackLight};

  padding: 5rem;

  ${(props) => props.theme.responsive.larger} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ti"
      "ba"
      "st"
      "de"
      "bu";
  }

  ${(props) => props.theme.responsive.medium} {
    padding: 2rem;
  }
`;

const TitleWrapper = styled.div`
  grid-area: ti;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const WorkType = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorGrayLight};
`;

const TechStackGroup = styled.div`
  grid-area: st;

  justify-self: end;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;

  ${(props) => props.theme.responsive.larger} {
    justify-content: flex-start;
    justify-self: start;
  }
`;

const StatusBadge = styled.p<StatusBadgeProps>`
  grid-area: ba;
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

const WorkDescription = styled.p`
  grid-area: de;
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
      border-bottom: ${(props) => `1px solid ${props.theme.colors.colorWhite}`};
    }
  }
`;

const ButtonWrapper = styled.p`
  grid-area: bu;
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
