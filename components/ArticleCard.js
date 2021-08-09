import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "8px",
  },
}));

const ArticleCard = ({ article }) => {
  const classes = useStyles();

  //!Commenting system is not done

  return (
    <Grid item>
      <Card className={classes.root} variant="outlined">
        <CardActionArea href={`/article/${article.slug}`}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {article.frontmatter.title}
            </Typography>

            <Typography variant="caption">
              {"#" +
                article.frontmatter.type +
                " ON " +
                article.frontmatter.date}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {article.frontmatter.excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Tooltip title="Under Development" placement="top">
            <Button size="small" color="primary">
              Talk About It
            </Button>
          </Tooltip>
          <Button
            size="small"
            color="primary"
            href={`/article/${article.slug}`}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
