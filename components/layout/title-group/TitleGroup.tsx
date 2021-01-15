import { Group } from "./TitleGroupStyles";

interface Props {
  children: React.ReactNode;
  centered: boolean;
}

const TitleGroup: React.FC<Props> = ({
  children,
  centered = false,
}: Props): JSX.Element => {
  return <Group centered={centered}>{children}</Group>;
};

export default TitleGroup;
