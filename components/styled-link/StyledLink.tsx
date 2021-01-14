import { LinkWrapper } from "./StyledLinkStyles";

interface Props {
  link: string;
  text: string;
}

const StyledLink: React.FC<Props> = ({ link, text }: Props) => {
  return (
    <LinkWrapper href={link} target="_blank" rel="noopener">
      {text}
    </LinkWrapper>
  );
};

export default StyledLink;
