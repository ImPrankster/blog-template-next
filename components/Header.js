import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Image from "next/image";

import LogoLight from "../public/logo.svg";
import LogoDark from "../public/logo-dark.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    borderRadius: 0,
  },
}));

/*
This is the Header of each page
The logo should be changed to your own
You can also add other stuffs to the Header like Typography
*/

const Header = ({ isInDarkMode }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Image
        src={isInDarkMode ? LogoDark : LogoLight}
        alt="the logo"
        height="200"
      />
    </Container>
  );
};

export default Header;
