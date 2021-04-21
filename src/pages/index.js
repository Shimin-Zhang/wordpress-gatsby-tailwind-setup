import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostSummary from "../components/post-summary"

export default function Home({ data }) {
  return (
    <Layout>
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-4xl text-indigo-600 font-semibold tracking-wide uppercase">
              Posts:
            </h2>
            { data.allWpPost.edges.map( ({ node }) => (
                <PostSummary post={node} />
              ))}
          </div>
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
