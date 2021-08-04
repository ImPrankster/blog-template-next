import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

import { Container, Grid, Typography, Button, Box } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  frontmatterGrid: {
    marginTop: theme.spacing(3),
  },
  frontmatterImg: {
    border: "1px solid rgba(138, 107, 190, 0.7)",
    borderRadius: "8px",
    marginBottom: theme.spacing(3),
  },
}));

export default function PostPage({
  frontmatter: { title, type, date, cover_image },
  slug,
  content,
}) {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackRoundedIcon />}
        href="/"
      >
        GO BACK
      </Button>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        className={classes.frontmatterGrid}
      >
        <img
          src={cover_image}
          alt=""
          width="100%"
          className={classes.frontmatterImg}
        />
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="overline">{"#" + type}</Typography>
        <Typography variant="overline">{"Posted On  " + date}</Typography>
        <div className="markdown-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Grid>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
