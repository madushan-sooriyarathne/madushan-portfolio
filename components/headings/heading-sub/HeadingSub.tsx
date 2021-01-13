import { Heading } from "./HeadingSubStyles";
interface Props {
  children: React.ReactNode;
}

const HeadingSub: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <Heading>{children}</Heading>;
};

export default HeadingSub;
