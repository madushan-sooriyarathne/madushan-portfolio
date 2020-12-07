import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
        font-weight: 400;
        font-family: ${(props) => props.theme.fontPrimary};
        letter-spacing: 0.5px;
        color: ${(props) => props.theme.colorWhite};

        ${(props) => props.theme.responsiveLargest} {
          font-size: 50%;
        }
    }

    body {
        background-color: ${(props) => props.theme.colorBlack};
        max-width: 100vw;
        min-height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colorBlackLight};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colorGray};
      border-radius: 10px;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colorGrayLight};
      }
    }


`;

export default GlobalStyles;
