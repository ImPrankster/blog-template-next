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
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(138, 107, 190, 0.7)",
    borderRadius: "8px",
  },
});

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} variant="outlined">
        <CardActionArea href={`/blog/${post.slug}`}>
          <CardMedia
            component="img"
            alt={post.frontmatter.title}
            height="140"
            image={post.frontmatter.cover_image}
            title={post.frontmatter.title}
          />

          <CardContent>
            <Typography variant="h6" component="h2">
              {post.frontmatter.title}
            </Typography>

            <Typography variant="overline">
              {"#" + post.frontmatter.type + " ON " + post.frontmatter.date}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {post.frontmatter.excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" href={`/blog/${post.slug}`}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
