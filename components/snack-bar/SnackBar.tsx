import { Dispatch, SetStateAction, useContext } from "react";
import {
  NotificationContext,
  NotificationDispatchContext,
} from "../../context/NotificationContextProvider";

import { Bar, Message, CloseButton, Icon } from "./SnackBarStyles";

const SnackBar: React.FC = (): JSX.Element => {
  const notification = useContext<string | null>(NotificationContext);
  const setNotification: Dispatch<SetStateAction<string | null>> = useContext<
    Dispatch<SetStateAction<string | null>>
  >(NotificationDispatchContext);

  const handleClose = (): void => {
    setNotification(null);
  };

  return (
    <Bar show={notification}>
      <Message>{notification}</Message>
      <CloseButton onClick={handleClose}>
        <Icon>
          <use xlinkHref="/static/svg/sprites.svg#close"></use>
        </Icon>
      </CloseButton>
    </Bar>
  );
};

export default SnackBar;
