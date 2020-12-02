import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MainApp;
