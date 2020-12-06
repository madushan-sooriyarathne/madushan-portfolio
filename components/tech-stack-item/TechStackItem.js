import { TechItem, TechItemLogo, TechItemName } from "./TechStackItemStyles";

const TechStackItem = ({ item }) => {
  return (
    <TechItem>
      <TechItemLogo src={item.logo} alt={item.name} />
      <TechItemName>{item.name}</TechItemName>
    </TechItem>
  );
};

export default TechStackItem;
