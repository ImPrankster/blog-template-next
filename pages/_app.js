import Header from "../components/Header";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//Themes
import lightThemeObj from "../utils/themes/themelight";
import darkThemeObj from "../utils/themes/themesdark";

const lightTheme = createTheme(lightThemeObj);
const darkTheme = createTheme(darkThemeObj);

function MyApp({ Component, pageProps }) {
  const isInDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <ThemeProvider theme={isInDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header isInDarkMode={isInDarkMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
