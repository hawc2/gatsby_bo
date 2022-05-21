const basePath = process.env.BASEPATH
const title = "The Beggars Opera"
const htmlTitle = "<em>The Beggars Opera</em>"

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    issue: {
      full: "Beggars Opera",
      short: "BO",
      path: "path"
    },
    doi: '10.55520/FAKE',
    group_order: 1, // Oder of this micro-edition in the volume's micro-edition section.
    title,
    htmlTitle,
    description: `A Scholarly Edition of. ${title}. Edited by Steve Newman, Fred Rowland, Alex Wermer-Colan.`,
    authors: [
      {
        "first": "Henry",
        "middle": "A",
        "last": "Wermer-Colan",
        "affiliations": [
          "Temple University"
        ],
        orcid:"0000-0000-0000-0000"
      }
    ],
    repository: "https://gitlab.com/scholarly-editing/se-microedition-template",
    menuLinks: [
      {
        name: 'introduction',
        link: '/'
      },
      {
        name: 'edition',
        link: '/example' // This needs to match the filename of the TEI
      },
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `introduction`,
        path: `src/introduction`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scholarly Editing`,
        short_name: `Scholarly Editing`,
        start_url: `/`,
        icon: `src/images/se-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
