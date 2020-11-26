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
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
    }


`;

export default GlobalStyles;
