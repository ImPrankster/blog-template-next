import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../components/Header";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";

import { lightTheme, darkTheme } from "../utils/themes";
import "../styles/global.css";

import { FaArrowUp } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const isInDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={isInDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header isInDarkMode={isInDarkMode} />
      <Component {...pageProps} />
      <Footer />
      <ScrollTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <FaArrowUp />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default MyApp;
