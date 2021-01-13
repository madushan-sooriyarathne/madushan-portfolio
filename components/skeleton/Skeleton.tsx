import { Element } from "./SkeletonStyles";

interface Props {
  height: string;
}

const Skeleton: React.FC<Props> = ({ height }: Props): JSX.Element => {
  return <Element skeletonHeight={height} />;
};

export default Skeleton;
