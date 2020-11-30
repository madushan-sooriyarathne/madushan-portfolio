import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* Fonts */

    @font-face {
        font-family: 'Almondita Regular';
        font-style: normal;
        font-weight: 400;
        src: local('Almondita Regular'), url('/static/fonts/almondita.woff') format('woff');
    }

    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 200;
        src: local('Avenir Next LT Pro Condensed Italic'), url('/static/fonts/AvenirNextLTPro-UltLt.woff') format('woff');
    }

      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 400;
        src: local('Avenir Next LT Pro Condensed Italic'), url('/static/fonts/AvenirNextLTPro-Regular.woff') format('woff');
    }

      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 600;
        src: local('Avenir Next LT Pro Condensed Italic'), url('/static/fonts/AvenirNextLTPro-Demi.woff') format('woff');
    }

      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 700;
        src: local('Avenir Next LT Pro Condensed Italic'), url('/static/fonts/AvenirNextLTPro-Bold.woff') format('woff');
    }

      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 900;
        src: local('Avenir Next LT Pro Condensed Italic'), url('/static/fonts/AvenirNextLTPro-Heavy.woff') format('woff');
    }
   
   

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
        font-weight: 400;
        font-family: 'Avenir Next', sans-serif;
        letter-spacing: 0.5px;
        color: ${(props) => props.theme.colorWhite};
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
