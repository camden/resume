module.exports = {
  plugins: [
    'gatsby-transformer-hjson',
    'gatsby-plugin-resolve-src',
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
        fonts: [`merriweather\:300i,400,700`],
      },
    },
  ],
};
