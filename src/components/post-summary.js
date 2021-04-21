import React from "react"
import { Link } from "gatsby"

export default function PostSummary({ post }) {
  const title = post.title;
  const slug = post.slug;
  const excerpt = post.excerpt;

  return (
    <div>
      <p>{title}</p>
      <p>{excerpt}</p>
      <Link to={slug}> Go </Link>
    </div>
  );
}
