import Link from "next/link";
import style from "../styles/Post.module.scss";

const Post = ({ post }) => {
  return (
    <div className={style.card}>
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <h4>#{post.frontmatter.type}</h4>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <div className={style.articleBtn}>Full Article</div>
      </Link>
    </div>
  );
};

export default Post;
