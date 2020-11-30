import styled from "styled-components";

const FooterWrapper = styled.footer`
  grid-column: full-start / full-end;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  background-color: transparent;
`;

const Copyright = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

export { FooterWrapper, Copyright };
