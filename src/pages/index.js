import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const posts = props.data.allWordpressWpWork.edges;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="All works" />
      {posts.map(({ node }) => {
        return (

          <div key={node.slug}>
              {node.featured_media &&
              <img src={node.featured_media.source_url} alt={node.title} className="featured-image" />
              }
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={`${postPrefix}/${node.slug}`}>
                {node.title}
              </Link>
            </h3>
            <small>{node.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    allWordpressWpWork(
       filter: {
         fields: {
           deploy: {eq: true}
         }
       }
        limit: 100
      ) {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
      }
    }
  }
`
