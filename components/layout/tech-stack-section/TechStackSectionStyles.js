import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;
  padding: 10rem;
  padding-top: ${(props) => `calc(${props.theme.headerHeight} + 5rem)`};
  min-height: ${(props) => `calc(100vh - ${props.theme.footerHeight}) `};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  gap: 5rem;
  align-items: start;
  justify-items: start;

  padding: 5rem;
`;

const StackGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colorBlackLight};

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StackHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;

  align-self: center;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const TechItem = styled.div`
  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr);
  align-items: center;
  justify-items: start;

  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colorWhite}`};
  border-radius: 5px;
  margin-bottom: 2rem;
  margin-right: 2rem;
  transition: background-color 0.2s ease-in, border 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colorWhite};
    border: ${(props) => `1px solid ${props.theme.colorBlack}`};

    & ${TechItemName} {
      color: ${(props) => props.theme.colorBlack};
    }
  }
`;

const TechItemLogo = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
`;

const TechItemName = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: 600;
  color: inherit;
  letter-spacing: 1px;
  line-height: 1;

  transition: color 0.2s ease-in;
`;

export {
  Section,
  ContentWrapper,
  StackGroup,
  StackHeading,
  ItemsWrapper,
  TechItem,
  TechItemLogo,
  TechItemName,
};
