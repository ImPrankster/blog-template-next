import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <h4>#{post.frontmatter.type}</h4>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <a className="btn">Full Article</a>
      </Link>
    </div>
  );
};

export default Post;
