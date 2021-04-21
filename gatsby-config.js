module.exports = {
  siteMetadata: {
    title: "MyHeadlessWordPress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost/blog/graphql",
      },
    },
    `gatsby-plugin-sharp`,
  ],
};
