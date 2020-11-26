import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

const MainApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MainApp;
