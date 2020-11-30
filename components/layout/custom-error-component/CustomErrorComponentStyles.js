import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: content-start / content-end;
  min-height: ${(props) => `calc(100vh - ${props.theme.footerHeight})`};
  padding: ${(props) => props.theme.headerHeight};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const LargeInputField = styled.input`
  font-size: 10rem;
  font-weight: 900;
  text-align: center;
  background-color: transparent;
  color: ${(props) => props.theme.colorWhite};
  outline: none;
  padding: 3rem 5rem;
  width: 50rem;
  border: ${(props) => `2px solid ${props.theme.colorWhite}`};
`;

export { Wrapper, FormGroup, LargeInputField };
