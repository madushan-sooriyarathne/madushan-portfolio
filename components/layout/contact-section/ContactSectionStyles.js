import styled from "styled-components";

const Section = styled.div`
  grid-column: content-start / content-end;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: start;
`;

const Form = styled.form`
  grid-column: 1 / 2;

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
`;

const ContactDetails = styled.div`
  grid-column: 2 / 3;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;
  align-content: center;
`;

const SocialLinkGroup = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
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
