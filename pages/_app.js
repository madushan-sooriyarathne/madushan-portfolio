import { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import NotificationContextProvider from "../context/NotificationContextProvider";

import theme from "../styles/theme";
import GlobalStyles, {
  consoleLogStylesPrimary,
  consoleLogStylesSecondary,
} from "../styles/GlobalStyles";

import "../styles/fonts.css";

const MainApp = ({ Component, pageProps }) => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      document.body.style.visibility = "visible";
    });

    // initial styled console logs
    console.log(
      "%c👋Hey Explorer! Welcome to my humble website 😀 Thanks for inspecting😉",
      consoleLogStylesPrimary
    );
    console.log(
      "%cLooking for the source code? 🧐 You can find it on my Github 👉 https://github.com/madushan-sooriyarathne/madushan-portfolio",
      consoleLogStylesSecondary
    );

    console.log(
      "%cHave an idea and want to collaborate? 💡 Hit me up here 👉 https://madushan.dev/contact",
      consoleLogStylesSecondary
    );
  }, []);

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
