import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const NotificationContext = createContext<string | null>("");
const NotificationDispatchContext = createContext<any>(""); // TODO - Find better type annotation for this

const NotificationContextProvider: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  const [notification, setNotification] = useState<string | null>("");

  const updateNotification = (message: string) => {
    setNotification(message);
    setTimeout((): void => {
      setNotification(null);
    }, 3000);
  };

  return (
    <NotificationDispatchContext.Provider value={updateNotification}>
      <NotificationContext.Provider value={notification}>
        {children}
      </NotificationContext.Provider>
    </NotificationDispatchContext.Provider>
  );
};

export { NotificationContext, NotificationDispatchContext };
export default NotificationContextProvider;
