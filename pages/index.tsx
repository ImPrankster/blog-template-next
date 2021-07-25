import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import { useState } from "react";
import Image from "next/image";
import style from "../styles/Home.module.scss";

// Components
import Post from "../components/Post";
import PostFilterSelector from "../components/PostFilterSelector";

export default function Home({ posts }) {
  const [postFilter, setPostFilter] = useState(null);

  return (
    <div>
      <Head>
        <title>ImPrankster&apos;s Blogs</title>
        <meta name="description" content="Blog from ImPrankster" />
        <meta name="keywords" content="Design, Coding, Daily" />
      </Head>

      <PostFilterSelector setPostFilter={setPostFilter} />

      <div className="posts">
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
      </div>
    </div>
  );
}

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

  //console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
