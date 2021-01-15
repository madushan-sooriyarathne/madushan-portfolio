import { FooterWrapper, Copyright } from "./FooterStyles";

const Footer: React.FC = (): JSX.Element => {
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
