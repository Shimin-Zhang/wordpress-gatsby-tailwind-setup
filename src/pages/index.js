import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostSummary from "../components/post-summary"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="">
        <div className="">
          <h4 className="">Posts:</h4>
          { data.allWpPost.edges.map( ({ node }) => (
              <PostSummary post={node} />
            ))}
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
{
  allWpPost(sort: {fields: [modified], order: [ASC]}, skip: 2) {
    edges {
      node {
        title
        excerpt
        slug
        modified(formatString: "MMMM DD, YYYY")
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}

`
