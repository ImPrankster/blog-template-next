import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  content: {
    borderTop: "2px solid",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        className={classes.content}
      >
        <Typography variant="caption">
          By&nbsp;
          <Link href="/article/about-me">ImPrankster</Link>
        </Typography>
        <Typography variant="caption">
          Built with&nbsp;
          <Link href="https://nextjs.org/">Next.JS</Link>,&nbsp;
          <Link href="https://material-ui.com/">Material-UI</Link>
          &nbsp;and&nbsp;
          <Typography variant="caption" component="span" color="primary">
            Love
          </Typography>
        </Typography>
        <Typography variant="caption">
          Hosted On <Link href="https://vercel.com/">Vercel</Link>
        </Typography>
        <Typography variant="caption">
          If not specifically stated, All Content is released under&nbsp;
          <Link href="/article/license">CC BY_SA 4.0</Link>
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
