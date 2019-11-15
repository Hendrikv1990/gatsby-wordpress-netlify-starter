import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const TeamTemplate = (props) => {

  const post = props.data.wordpressWpTeam;
  const siteTitle = props.data.site.siteMetadata.title;
  let featuredImage = false;



  if (post.featured_media && post.featured_media.source_url ) {
    featuredImage = post.featured_media.source_url;
  }


  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.excerpt}
      />
        <h1>{post.title} </h1>
      {featuredImage &&
        <img src={featuredImage} alt={post.title} className="featured-image" />
      }
        <div
          className="post-meta"
          style={{
            marginBottom: rhythm(1),
          }}
        >
          <div className="post-date">{post.date}</div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr
        style={{
          marginBottom: rhythm(1),
        }}
        />
      <Bio />
    </Layout>
  )

}

export default TeamTemplate

export const pageQuery = graphql`
  query TeamById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressWpTeam(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      modified
      id
      featured_media {
        source_url
      }
      content
    }
  }
`
