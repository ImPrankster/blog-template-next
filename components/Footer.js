import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Link,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  content: {
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
        <Typography variant="caption">By ImPrankster</Typography>
        <Typography variant="caption">
          Built with&nbsp;
          <Link href="https://nextjs.org/">Next.JS</Link>,&nbsp;
          <Link href="https://material-ui.com/">Material-UI</Link>
          &nbsp;and&nbsp;
          <Tooltip
            disableFocusListener
            title="It's not a JavaScript Framework"
            placement="top"
          >
            <Typography variant="caption" component="span" color="primary">
              Love
            </Typography>
          </Tooltip>
        </Typography>
        <Typography variant="caption">
          Hosted On <Link href="https://vercel.com/">Vercel</Link>
        </Typography>
        <Typography variant="caption">
          All Content is released under&nbsp;
          <Link href="/article/license">MIT license</Link>
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
