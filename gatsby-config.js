/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'doubleZ my-React-study',
    description: 'description of my website',
    keywords: 'key1, key2'
  },
  /* Your site config here */
  plugins: [
    { 
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'q0r4vbd3sc7a',
        accessToken: 'PG4Nq8DR-eNmLIs9odxkwcohxdHSAZM6rrvYKi5xP0Y'
      }
    }
  ],
}
