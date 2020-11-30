import styled from "styled-components";

const CustomButton = styled.button`
  display: flex;
  align-items: center;

  outline: none;
  background-color: transparent;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-5px);
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    background-color: rgba(255, 255, 255, 0.3);

    transition: width 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover {
    transform: translateX(3px);

    &::before {
      width: 110%;
    }
  }
`;

const ButtonText = styled.p`
  font-size: ${(props) => (props.isBig ? "2rem" : "1.5rem")};
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 1;
  color: ${(props) => props.theme.colorWhite};
`;

const Arrow = styled.div`
  width: 5rem;
  height: 2rem;
  background-image: url("/static/img/arrow.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  margin-left: 1rem;
`;

export { CustomButton, ButtonText, Arrow };
