import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: content-start / content-end;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const Image404 = styled.img`
  height: 40rem;
`;

export { Wrapper, Image404 };
