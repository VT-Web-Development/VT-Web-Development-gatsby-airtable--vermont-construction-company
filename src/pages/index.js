import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  Services,
  About,
  Projects,
  Slider,
  GetAQuote,
} from '../components'
import Seo from '../components/SEO'
import ScrollUp from '../components/ScrollUp'

const HomePage = ({ data }) => {
  const {
    projects: { edges: projects },
    customers: { edges: customers },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Projects projects={projects} title="Our Projects" />
      <Slider customers={customers} />
      <GetAQuote />
      <ScrollUp />
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
                  name {
                    text
                  }
                  number
                  type {
                    text
                  }
                  date(formatString: "YYYY-MM-DD")
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
  }
`

export default HomePage
