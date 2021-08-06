import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "8px",
  },
}));

const ArticleCard = ({ article }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} variant="outlined">
        <CardActionArea href={`/article/${article.slug}`}>
          <CardMedia
            component="img"
            alt={article.frontmatter.title}
            height="140"
            image={article.frontmatter.cover_image}
            title={article.frontmatter.title}
          />

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
