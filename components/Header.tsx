import React from "react";
import Link from "next/link";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item>
        <Typography variant="h4" component="h2">
          ImPrankster
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
