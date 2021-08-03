import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

import { Container, Grid, Typography, Button } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
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
    <Container size="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArrowBackRoundedIcon />}
          href="/"
        >
          GO BACK
        </Button>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Container>
    // <>
    //   <Link href="/" passHref>
    //     <a className="btn">Go Back</a>
    //   </Link>
    //   <div className="card card-page">
    //     <h1 className="post-title">{title}</h1>
    //     <h2 className="post-type">#{type}</h2>
    //     <div className="post-date">Posted on {date}</div>
    //     <img src={cover_image} alt="" />
    //     <div className="post-body">
    //       <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    //     </div>
    //   </div>
    // </>
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
