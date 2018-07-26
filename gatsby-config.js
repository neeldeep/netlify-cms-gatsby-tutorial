module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/NYC`,
      name: "nyc-markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Dallas`,
        name: "dallas-markdown-pages",
        },
      },
  ],
}
