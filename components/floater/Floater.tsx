import { useEffect, useState, MouseEvent } from "react";
import { Wrapper, Icon } from "./FloaterStyles";

const Floater: React.FC = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  useEffect((): void => {
    window.addEventListener("scroll", () => {
      const yCords: number = window.scrollY;

      if (yCords >= 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    window.scroll(0, 0);
  };

  return (
    <Wrapper onClick={handleClick} visible={show}>
      <Icon>
        <use xlinkHref="/static/svg/sprites.svg#up"></use>
      </Icon>
    </Wrapper>
  );
};

export default Floater;
