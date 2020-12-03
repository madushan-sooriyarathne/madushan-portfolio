import { Group } from "./TitleGroupStyles";

const TitleGroup = ({ children, centered = false }) => {
  return <Group centered={centered}>{children}</Group>;
};

export default TitleGroup;
