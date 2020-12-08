import styled from "styled-components";

const Section = styled.div`
  grid-column: content-start / content-end;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
  grid-auto-rows: max-content;
  grid-template-areas: "in so";
  gap: 5rem;
  align-items: center;
  justify-items: start;

  ${(props) => props.theme.responsiveMedium} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "in"
      "so";
  }
`;

const Form = styled.form`
  grid-area: in;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 5rem;
  width: 100%;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > *:first-child {
    margin-bottom: 5rem;
  }

  ${(props) => props.theme.responsiveSmall} {
    padding: 5rem 0;
  }

  & > *:first-child {
    ${(props) => props.theme.responsivePhone} {
      align-items: center;
      text-align: center;
    }
  }
`;

const ContactDetails = styled.div`
  grid-area: so;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;
  align-content: center;

  ${(props) => props.theme.responsiveMedium} {
    padding: 0 0 5rem 0;
  }
`;

const SocialLinkGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.responsiveLarger} {
    width: 70%;
  }

  ${(props) => props.theme.responsivePhone} {
    width: 100%;
  }
`;

const ContactDetailsGroup = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Section, Form, ContactDetails, SocialLinkGroup, ContactDetailsGroup };
