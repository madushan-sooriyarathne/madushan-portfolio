import { Badge, Logo, Text } from "./SocialBadgeStyles";

interface Props {
  social: {
    name: string;
    userName: string;
    url: string;
  };
}

const SocialBadge: React.FC<Props> = ({ social }: Props): JSX.Element => {
  const handleClick = (): void => {
    window.open(social.url, "_blank");
  };

  return (
    <Badge onClick={handleClick}>
      <Logo>
        <use xlinkHref={`/static/svg/sprites.svg#${social.name}`}></use>
      </Logo>
      <Text>{social.userName}</Text>
    </Badge>
  );
};

export default SocialBadge;
