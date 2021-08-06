import { useState } from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import { makeStyles } from "@material-ui/styles";

import { Container, Grid } from "@material-ui/core";

// Components
import ArticleCard from "../components/ArticleCard";
import AppTab from "../components/AppTab";
import TabPanel from "../components/TabPanel";

//get Props
export async function getStaticProps() {
  // Get files from root/articles
  const files = fs.readdirSync(path.join("articles"));
  // Get slugs and front matter from the articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");
    // Front Matter
    const markdownWithMeta = fs.readFileSync(
      path.join("articles", filename),
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
      articles: articles.sort(sortByDate),
    },
  };
}

//Set Style
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Home({ articles }) {
  const [filter, setFilter] = useState(0);
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>ImPrankster&apos;s Blogs</title>
        <meta name="description" content="Blog from ImPrankster" />
        <meta name="keywords" content="Design, Coding, Daily" />
      </Head>

      <AppTab filter={filter} setFilter={setFilter} />

      <Container maxWidth="md" className={classes.root}>
        <TabPanel value={filter} index={0}>
          {articles
            .filter((article) => article.frontmatter.type == "About")
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </TabPanel>
        <TabPanel value={filter} index={1}>
          {articles
            .filter((article) => article.frontmatter.type == "Daily")
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </TabPanel>
        <TabPanel value={filter} index={2}>
          {articles
            .filter((article) => article.frontmatter.type == "Projects")
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </TabPanel>
      </Container>
    </>
  );
}
