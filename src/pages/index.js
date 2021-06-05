import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Slider,
  GridProjects,
} from '../components'
import Seo from '../components/SEO'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
    hero: { nodes: hero },
  } = data

  return (
    <Layout>
      <Hero hero={hero} />
      <About />
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

    hero: allAirtable(
      filter: { table: { eq: "Hero" }, data: { name: { eq: "logo" } } }
    ) {
      nodes {
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 500
                )
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage
