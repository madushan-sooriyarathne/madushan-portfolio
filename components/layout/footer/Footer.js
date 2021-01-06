import { FooterWrapper, Copyright } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        © {new Date().getFullYear()} - Madushan Sooriyarathne
      </Copyright>
      <Copyright>Handcrafted with ❤️ by me</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
