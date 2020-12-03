import { Group } from "./TitleGroupStyles";

const TitleGroup = ({ children, centered = true }) => {
  return <Group centered={centered}>{children}</Group>;
};

export default TitleGroup;
