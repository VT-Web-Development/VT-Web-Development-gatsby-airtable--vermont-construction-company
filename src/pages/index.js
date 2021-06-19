import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  Services,
  About,
  Projects,
  Slider,
  Contact,
  GridProjects,
} from '../components'
import Seo from '../components/SEO'

const HomePage = ({ data }) => {
  const {
    projects: { edges: projects },
    // allAirtable: { nodes: projects },
    customers: { edges: customers },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Projects projects={projects} title="Our Projects" />
      {/* <GridProjects projects={projects} title="Our Projects" /> */}
      <Slider customers={customers} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allPrismicProjects {
      edges {
        node {
          data {
            body {
              ... on PrismicProjectsDataBodyImageGallery {
                id
                items {
                  image {
                    alt
                    gatsbyImageData
                    url
                  }
                }
              }
            }
            title {
              text
            }
          }
        }
      }
    }

    customers: allPrismicTestimonails {
      edges {
        node {
          data {
            body {
              ... on PrismicTestimonailsDataBodyFaqSection {
                id
                items {
                  image1 {
                    alt
                    gatsbyImageData
                  }
                  name1 {
                    text
                  }
                  quote1 {
                    text
                  }
                  title1 {
                    text
                  }
                }
                primary {
                  title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }

    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
    # customers: allAirtable(filter: { table: { eq: "Customers" } }) {
    #   nodes {
    #     id
    #     data {
    #       quote
    #       title
    #       name
    #       image {
    #         localFiles {
    #           childImageSharp {
    #             gatsbyImageData(
    #               width: 150
    #               height: 150
    #               placeholder: TRACED_SVG
    #             )
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  }
`

export default HomePage
