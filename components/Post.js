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
  Chip,
} from "@material-ui/core";

import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  chipGrid: {
    marginBottom: theme.spacing(1),
  },
}));

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
            <Typography gutterBottom variant="h5" component="h2">
              {post.frontmatter.title}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              className={classes.chipGrid}
            >
              <Grid item>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={post.frontmatter.date}
                  icon={<ScheduleRoundedIcon />}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={post.frontmatter.type}
                />
              </Grid>
            </Grid>
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
