import { Heading } from "./HeadingSecondaryStyles";

interface Props {
  children: React.ReactNode;
}

const HeadingSecondary: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  return <Heading>{children}</Heading>;
};

export default HeadingSecondary;
