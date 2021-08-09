import { createTheme } from "@material-ui/core";

/*Under here you can change the Theme of your Webpage
Follow the guide on https://material-ui.com/customization/theming/ to create your own theme
lightTheme and darkTheme is automatically adapted according to the system setting, However you can also change it manually by setting the Hook in the _appjs
Notice that the style of the markdown body is controlled seperately in the global.css
*/

const lightTheme = createTheme({
  spacing: 8,

  palette: {
    type: "light",
    text: {
      primary: "#1c1c1c",
    },
    primary: {
      main: "#d53369",
    },
    secondary: {
      main: "#1c1c1c",
    },
    background: {
      default: "#fffffb",
    },
  },

  typography: {
    h1: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h2: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h3: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    caption: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
  },
});

const darkTheme = createTheme({
  spacing: 8,

  palette: {
    type: "dark",
    text: {
      primary: "#fffffb",
    },
    primary: {
      main: "#d53369",
    },
    secondary: {
      main: "#fffffb",
    },
    background: {
      default: "#1c1c1c",
    },
  },

  typography: {
    h1: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h2: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h3: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    caption: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
  },
});

export { lightTheme, darkTheme };
