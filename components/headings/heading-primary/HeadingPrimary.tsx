import { Heading } from "./HeadingPrimaryStyles";

interface Props {
  children: React.ReactNode;
}

const HeadingPrimary: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <Heading>{children}</Heading>;
};

export default HeadingPrimary;
