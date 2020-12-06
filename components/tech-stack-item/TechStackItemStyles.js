import styled from "styled-components";

const TechItemName = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: 600;
  color: inherit;
  letter-spacing: 1px;
  line-height: 1;

  transition: color 0.2s ease-in;
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

export { TechItem, TechItemName, TechItemLogo };
