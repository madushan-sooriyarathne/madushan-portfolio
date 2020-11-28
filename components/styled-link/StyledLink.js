import { LinkWrapper } from "./StyledLinkStyles";

const StyledLink = ({ link, text }) => {
  return (
    <LinkWrapper href={link} target="_blank" rel="noopener">
      {text}
    </LinkWrapper>
  );
};

export default StyledLink;
