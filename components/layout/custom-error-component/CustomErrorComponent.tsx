import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import Button from "../../button/Button";

import { Wrapper, Image404 } from "./CustomErrorComponentStyles";
import TitleGroup from "../title-group/TitleGroup";

const CustomErrorComponent: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <TitleGroup centered={true}>
        <HeadingPrimary>Oh! Looks like you are lost in space</HeadingPrimary>
      </TitleGroup>
      <Image404 src="/static/svg/bg-404.svg" alt="404 Image" />

      <Button isBig={true} route="/">
        Go back home
      </Button>
    </Wrapper>
  );
};

export default CustomErrorComponent;
