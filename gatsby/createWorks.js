
const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const workTemplate = path.resolve(`./src/templates/work.js`);

  return graphql(
    `
    {
      site {
        siteMetadata {
          workPrefix
        }
      }
      allWordpressWpWork {
        edges {
          node {
            id
            slug
            modified
            fields {
              deploy
            }
            featured_media {
               source_url
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { workPrefix } = result.data.site.siteMetadata;
    const { edges } = result.data.allWordpressWpWork;

    edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: `${workPrefix}/${edge.node.slug}`,
          component: workTemplate,
          context: {
            id: edge.node.id,
          }
        })
      }
    })
    // ==== END POSTS ====
    return null;
  })
}
