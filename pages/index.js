import { useState } from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import { makeStyles } from "@material-ui/styles";

import { Container, Grid } from "@material-ui/core";

// Components
import Post from "../components/Post";
import PostFilterSelector from "../components/PostFilterSelector";

//get Props
export async function getStaticProps() {
  // Get files from root/posts
  const files = fs.readdirSync(path.join("posts"));
  // Get slugs and front matter from the posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");
    // Front Matter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

//Set Style
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Home({ posts }) {
  const [postFilter, setPostFilter] = useState(null);
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>ImPrankster&apos;s Blogs</title>
        <meta name="description" content="Blog from ImPrankster" />
        <meta name="keywords" content="Design, Coding, Daily" />
      </Head>

      <PostFilterSelector
        postFilter={postFilter}
        setPostFilter={setPostFilter}
      />
      <Container size="md" className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          {posts
            .filter((post) => {
              if (postFilter == null) {
                return true;
              } else {
                return post.frontmatter.type == postFilter;
              }
            })
            .map((post, index) => (
              <Post key={index} post={post} />
            ))}
        </Grid>
      </Container>
    </>
  );
}
