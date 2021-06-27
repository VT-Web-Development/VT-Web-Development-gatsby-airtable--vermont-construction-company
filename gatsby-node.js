const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPrismicServices {
        nodes {
          slug: uid
        }
      }
    }
  `)

  result.data.allPrismicServices.nodes.forEach(node =>
    createPage({
      path: `/services/${node.slug}`,
      component: path.resolve(`src/templetes/services-templete.js`),
      context: {
        slug: node.slug,
      },
    })
  )
}
