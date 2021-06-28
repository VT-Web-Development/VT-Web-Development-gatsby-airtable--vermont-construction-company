import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { Layout, Projects, Form } from '../components'
import ScrollUp from '../components/ScrollUp'

const ProjectsPage = ({ data }) => {
  const {
    projects: { edges: projects },
  } = data

  return (
    <Wrapper>
      <Layout>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <Projects title="our projects" projects={projects} page />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className="background">
          <MDBRow>
            <MDBCol md="6" className="offset-md-3">
              <Form />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <ScrollUp />
      </Layout>
    </Wrapper>
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
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);

  .background {
    background: var(--clr-primary-3);
    padding: 2rem;
  }

  .section-center {
    width: 100%;
  }
`

export default ProjectsPage
