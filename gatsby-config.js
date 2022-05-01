const basePath = '/gatsby_bo'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `The Beggars Opera`,
    description: `A digital edition.`,
    author: `Alex Wermer-Colan`
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/tei`,
      },
    },
    {
      resolve: `gatsby-transformer-ceteicean`,
      options: {
        namespaces: {
          "http://www.music-encoding.org/ns/mei": "mei",
          "http://dita.​oasis-open.​org/​architecture/​2005/": "dita"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/pages`,
        name: `html`,
      },
    },
  ],
}
