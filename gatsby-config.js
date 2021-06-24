require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Vermont Construction Company`,
    description: `Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. `,
    author: `Krittiya Clark`,
    titleTemplate: `%s | Vermont Construction Company`,
    url: `https://vermontconstructioncompany.net`,
    image: `mainBcg.png`,
    twitterUsername: `@vtwebdev`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.vtwebdevelopment.com',
    //     sitemap: 'https://www.vtwebdevelopment.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [
    //       `/src/pages/index.js/`,
    //       `/src/pages/about.js/`,
    //       `/src/pages/services.js/`,
    //       `/src/pages/portfolio.js/*`,
    //       `/src/pages/blog.js/*`,
    //       `/src/pages/contact.js/`,
    //       `/src/pages/newsletter.js`,
    //     ],
    //   },
    // },

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          hero: require('./src/schemas/hero.json'),
          images: require('./src/schemas/image.json'),
          projects: require('./src/schemas/project.json'),
          about: require('./src/schemas/about.json'),
          contact: require('./src/schemas/contact.json'),
          services: require('./src/schemas/services.json'),
          testimonails: require('./src/schemas/testimonials.json'),
          about_us_page: require('./src/schemas/about-us-page.json'),
          get_a_quote: require('./src/schemas/get-a-quote.json'),
        },
        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },

        // Provide a default set of Imgix image transformations applied to
        // the placeholder images of Imgix-backed gatsby-image fields. These
        // parameters will be applied over those provided in the above
        // `imageImgixParams` option.
        // See: https://docs.imgix.com/apis/url
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Projects`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Customers`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Hero`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
  ],
}
