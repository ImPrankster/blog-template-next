import Header from "../components/Header";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const isInDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        spacing: 8,

        palette: {
          type: isInDarkMode ? "dark" : "light",
          primary: {
            main: isInDarkMode ? "#8A6BBE" : "#6F3381",
          },
          secondary: {
            main: "#CB4042",
          },
          background: {
            default: isInDarkMode ? "#1c1c1c" : "#fffffb",
          },
        },

        typography: {
          h3: {
            fontFamily: "Source Serif Pro, serif",
            fontWeight: "600",
            fontSize: "2.2rem",
            "@media (min-width:600px)": {
              fontSize: "3rem",
            },
          },
        },
      }),
    [isInDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isInDarkMode={isInDarkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
