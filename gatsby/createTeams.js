
const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const workTemplate = path.resolve(`./src/templates/team.js`);

  return graphql(
    `
    {
      site {
        siteMetadata {
          teamPrefix
        }
      }
      allWordpressWpTeam {
        edges {
          node {
            id
            slug
            modified
            fields {
              deploy
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

    const { teamPrefix } = result.data.site.siteMetadata;
    const { edges } = result.data.allWordpressWpTeam;

    edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: `${teamPrefix}/${edge.node.slug}`,
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
