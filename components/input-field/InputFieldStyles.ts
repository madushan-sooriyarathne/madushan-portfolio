import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: start;
  justify-items: start;

  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 3rem 1rem 1rem 1rem;
  border: none;
  outline: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.colorWhite}`};
  font-size: 1.5rem;
  font-weight: 400;
  background-color: transparent;
  color: ${(props) => props.theme.colors.colorWhite};
  transition: border 0.2s ease-in;

  &:not(:placeholder-shown):invalid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.colorDanger}`};
  }

  &:not(:placeholder-shown):valid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.colorSuccess}`};
  }

  &:placeholder-shown {
    & + label {
      transform: translateY(3rem);
      opacity: 0;
      visibility: hidden;
    }
  }

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.fontPrimary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 18rem;
  resize: none;
  padding: 3rem 1rem 1rem 1rem;
  border: none;
  outline: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.colorWhite}`};
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.fontPrimary};
  font-weight: 400;
  background-color: transparent;
  color: ${(props) => props.theme.colors.colorWhite};
  transition: border 0.2s ease-in;

  &:not(:placeholder-shown):invalid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.colorDanger}`};
  }

  &:not(:placeholder-shown):valid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.colorSuccess}`};
  }

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.fontPrimary};
  }

  &:placeholder-shown {
    & + label {
      transform: translateY(3rem);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Label = styled.label`
  position: absolute;
  top: 5px;
  left: 1rem;

  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorGray};

  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

export { Wrapper, Input, TextArea, Label };
