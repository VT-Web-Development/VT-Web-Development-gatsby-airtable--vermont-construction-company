import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  Services,
  Projects,
  Slider,
  GridProjects,
} from '../components'
import Seo from '../components/SEO'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      {/* <Projects projects={projects} title="latest projects" /> */}
      <GridProjects projects={projects} title="latest projects" />
      <Slider customers={nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
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
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          quote
          title
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  height: 150
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
