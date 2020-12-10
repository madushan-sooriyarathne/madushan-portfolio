import { createContext, useState } from "react";

const NotificationContext = createContext();
const NotificationDispatchContext = createContext();

const NotificationContextProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const updateNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
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
