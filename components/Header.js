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

const Header = ({ isInDarkMode }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Image
        src={isInDarkMode ? LogoDark : LogoLight}
        alt="imprankster"
        height="200"
      />
    </Container>
  );
};

export default Header;
