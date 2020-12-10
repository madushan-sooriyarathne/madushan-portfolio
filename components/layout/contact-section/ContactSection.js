import { useContext } from "react";
import { NotificationDispatchContext } from "../../../context/NotificationContextProvider";
import useInputState from "../../../hooks/useInputState";

import InputField from "../../input-field/InputField";
import TitleGroup from "../title-group/TitleGroup";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";
import Button from "../../button/Button";
import SocialBadge from "../../social-badge/SocialBadge";

import { socialLinks } from "../../../data/data";

import {
  Section,
  Form,
  ContactDetails,
  SocialLinkGroup,
  ContactDetailsGroup,
} from "./ContactSectionStyles";

const ContactSection = () => {
  // state
  const [name, updateName, resetName] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");
  const [message, updateMessage, resetMessage] = useInputState("");

  // context
  const setNotification = useContext(NotificationDispatchContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Submit to API and that magic
    const res = await fetch("/api/inquire", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      // show notification
      setNotification(
        `Hey ${
          name.split(" ")[0]
        }. Thanks for you inquiry. I have received it and will get back to as soon as possible`
      );
      // clear fields
      resetName();
      resetEmail();
      resetMessage();
    } else {
      setNotification(
        "Sorry! We encountered an error while submitting your inquiry. Please try again in a bit."
      );
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <TitleGroup>
          <HeadingPrimary>Wanna Talk?</HeadingPrimary>
          <HeadingSub>
            Feel like contacting me? Submit your message here and I will get
            back to as soon as possible.
          </HeadingSub>
        </TitleGroup>
        <InputField name="Name" onChange={updateName} value={name} required />
        <InputField
          name="Email"
          type="email"
          onChange={updateEmail}
          value={email}
          required
        />
        <InputField
          name="Message"
          onChange={updateMessage}
          value={message}
          textarea
        />
        <Button type="submit">Send</Button>
      </Form>
      <ContactDetails>
        <SocialLinkGroup>
          {socialLinks.map((link) => (
            <SocialBadge social={link} key={link.id} />
          ))}
        </SocialLinkGroup>
        <ContactDetailsGroup>
          <HeadingSecondary>+94 71 688 0657</HeadingSecondary>
          <HeadingSub>madushan.sooriyarathne@outlook.com</HeadingSub>
        </ContactDetailsGroup>
      </ContactDetails>
    </Section>
  );
};

export default ContactSection;
