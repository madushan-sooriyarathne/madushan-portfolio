import { useEffect, useState } from "react";
import { Wrapper, Icon } from "./FloaterStyles";

const Floater = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const yCords = window.scrollY;
      if (yCords >= 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const handleClick = () => {
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
