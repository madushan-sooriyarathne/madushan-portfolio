import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`


    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
        font-weight: 400;
        font-family: ${(props) => props.theme.fonts.fontPrimary};
        letter-spacing: 0.5px;
        scroll-behavior: smooth;
        color: ${(props) => props.theme.colors.colorWhite};

        ${(props) => props.theme.responsive.largest} {
          font-size: 50%;
        }

        ${(props) => props.theme.responsive.small} {
          font-size: 43.75%;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.colorBlack};
        max-width: 100vw;
        min-height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.colorBlackLight};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.colorGray};
      border-radius: 10px;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colors.colorGrayLight};
      }
    }

`;

const consoleLogStylesPrimary: string = `
      font-size: 20px;
      font-weight: 500;
      color: #f7f7f7;
      background-color: #030303;
      padding: 10px;
      border-radius: 5px;
    `;

const consoleLogStylesSecondary: string = `
     font-size: 15px;
      font-weight: 400;
      color: #f7f7f7;
      background-color: #222222;
      padding: 5px;
      border-radius: 5px;
  `;

export default GlobalStyles;
export { consoleLogStylesPrimary, consoleLogStylesSecondary };
