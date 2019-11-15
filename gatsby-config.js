module.exports = {
  siteMetadata: {
    title: `hkvlaanderen`,
    author: `Justin W Hall`,
    description: `Web Developer & IT Consultant`,
    siteUrl: `https://elastic-sammet-90cff7.netlify.com`,
    social: {
      twitter: `justinwhall`,
    },
    postPrefix : '/blog',
    teamPrefix : '/team',
    workPrefix : '/work',
    pagePrefix: '',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'blog.hkvlaanderen.com',
        // baseUrl: 'data.justinwhall.com',
        // baseUrl: 'wpgatsby.wtf',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        excludedRoutes: [
          "/*/*/comments",
          "/yoast/**",
          "/oembed/*"
        ],
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/sass/"]
      },
    },
    {resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      // Exclude specific pages or groups of pages using glob parameters
      // See: https://github.com/isaacs/minimatch
      // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    }},
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
