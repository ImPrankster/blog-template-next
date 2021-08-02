import React from "react";
import Link from "next/link";
import { Container, makeStyles, Paper } from "@material-ui/core";
import Image from "next/image";

import LogoLight from "../public/logo-face-me-imprankster.svg";
import LogoDark from "../public/logo-face-me-imprankster-dark.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4),
    borderRadius: "0",
  },
}));

const Header = ({ isInDarkMode }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Image
        src={isInDarkMode ? LogoDark : LogoLight}
        alt="me.ImPrankster"
        height={90}
      />
    </Container>
  );
};

export default Header;
