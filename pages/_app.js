import { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import NotificationContextProvider from "../context/NotificationContextProvider";

import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

import "../styles/fonts.css";

const MainApp = ({ Component, pageProps }) => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      document.body.style.visibility = "visible";
    });
  });

  return (
    <>
      <Head>
        <title>
          Madushan Sooriyarathne | Full Stack Developer & Creative Designer
        </title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <NotificationContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </NotificationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
