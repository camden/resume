module.exports = {
  plugins: [
    'gatsby-transformer-hjson',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`merriweather\:300i,400,900`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71680879-3',
        head: true,
      },
    },
  ],
};
