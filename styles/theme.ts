import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      colorBlack: string;
      colorBlackLight: string;
      colorWhite: string;
      colorGray: string;
      colorGrayLight: string;
      colorSuccess: string;
      colorSuccessRGB: string;
      colorWarning: string;
      colorWarningRGB: string;
      colorDanger: string;
      colorDangerRGB: string;
    };

    fonts: {
      fontPrimary: string;
      fontSecondary: string;
    };

    sizes: {
      navBarFoldedWidth: string;
      headerHeight: string;
      footerHeight: string;
    };
    responsive: {
      largest: string;
      larger: string;
      large: string;
      mediumHigh: string;
      medium: string;
      small: string;
      phone: string;
      heightSmall: string;
    };
  }
}

const theme = {
  colorBlack: "#030303",
  colorBlackLight: "#222222",
  colorWhite: "#f7f7f7",
  colorGray: "#3B3B3B",
  colorGrayLight: "#7e7e7e",
  colorSuccess: "#06D6A0",
  colorSuccessRGB: "6, 214, 160",
  colorWarning: "#F4A261",
  colorWarningRGB: "244, 162, 97",
  colorDanger: "#D62828",
  colorDangerRGB: "214, 40, 40",
  fontPrimary: "'Avenir Next', sans-serif",
  fontSecondary: "'Almondita Regular','Times New Roman', Times, serif",
  navBarFoldedWidth: "15rem",
  headerHeight: "10rem",
  footerHeight: "10rem",

  responsiveLargest: "@media only screen and (max-width: 87.5em)", // 1400px
  responsiveLarger: "@media only screen and (max-width: 75em)", // 1200px
  responsiveLarge: "@media only screen and (max-width: 62.5em)", // 1000px
  responsiveMediumHigh: "@media only screen and (max-width: 56.25em)", // 900px
  responsiveMedium: "@media only screen and (max-width: 50em)", // 800px
  responsiveSmall: "@media only screen and (max-width: 31.25em)", // 500px
  responsivePhone: "@media only screen and (max-width: 25em)", // 400px
  responsiveHeightSmall: "@media only screen and (max-height: 31.25em)", // 500px (Height)
};

export default theme;
