import { Badge, Logo, Text } from "./SocialBadgeStyles";

const SocialBadge = ({ social }) => {
  const handleClick = () => {
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
