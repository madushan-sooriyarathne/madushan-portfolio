import { useContext } from "react";

import {
  NotificationContext,
  NotificationDispatchContext,
} from "../../context/NotificationContextProvider";

import { Bar, Message, CloseButton, Icon } from "./SnackBarStyles";
const SnackBar = () => {
  const notification = useContext(NotificationContext);
  const setNotification = useContext(NotificationDispatchContext);

  const handleClose = () => {
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
