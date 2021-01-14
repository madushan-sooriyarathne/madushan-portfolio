import { TechItem, TechItemLogo, TechItemName } from "./TechStackItemStyles";

interface Props {
  item: {
    logo: string;
    name: string;
  };
}

const TechStackItem: React.FC<Props> = ({ item }: Props): JSX.Element => {
  return (
    <TechItem>
      <TechItemLogo src={item.logo} alt={item.name} />
      <TechItemName>{item.name}</TechItemName>
    </TechItem>
  );
};

export default TechStackItem;
