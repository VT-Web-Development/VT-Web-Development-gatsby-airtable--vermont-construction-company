"use strict";

require('dotenv').config({
  path: ".env.".concat(process.env.NODE_ENV)
}); // const queries = require("./src/constants/algolia")


module.exports = {
  siteMetadata: {
    title: "Vermont Construction Company",
    description: "Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. ",
    author: "Krittiya Clark",
    titleTemplate: "%s | Vermont Construction Company",
    url: "https://vermontconstructioncompany.net",
    image: "mainBcg.png",
    twitterUsername: "@vtwebdev"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", "gatsby-background-image", "gatsby-plugin-react-helmet", "gatsby-plugin-styled-components", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, // {
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
    resolve: "gatsby-source-airtable",
    options: {
      apiKey: process.env.GATSBY_AIRTABLE_API,
      concurrency: 5,
      tables: [{
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: "Projects",
        mapping: {
          image: "fileNode"
        }
      }, {
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: "Customers",
        mapping: {
          image: "fileNode"
        }
      }, {
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: "Hero",
        mapping: {
          image: "fileNode"
        }
      }]
    }
  }]
};