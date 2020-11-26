import { FooterWrapper, Copyright } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        © madushan.dev {new Date().getFullYear()} - All rights reserved.
      </Copyright>
      <Copyright>Handcrafted with ❤️ by me</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
