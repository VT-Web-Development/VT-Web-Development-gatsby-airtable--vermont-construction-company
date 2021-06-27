import React from 'react'
import styled from 'styled-components'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact'
import { Link, useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Title from './Title'

const Services = () => {
  const {
    services: { edges: services },
  } = useStaticQuery(query)

  console.log(services)
  return (
    <Wrapper>
      <MDBContainer
        fluid
        display="flex"
        flex="column"
        justifycontent="center"
        className="section-center"
      >
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <Title title="Our Services" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {services &&
            services.map(service => {
              console.log(service)
              const { title, description } = service.node.data
              const { slug } = service.node
              const { alt } = service.node.data.image
              const image = service.node.data.image.gatsbyImageData
              console.log(slug)

              return (
                <MDBCol
                  md="4"
                  key={alt}
                  className="mb-4 d-flex align-items-stretch hover-overlay ripple shadow-1-strong rounded"
                >
                  <article className="d-flex">
                    <nav>
                      <Link to={`/services/${slug}`}>
                        <MDBCard className="h-100" key={title.text}>
                          <GatsbyImage
                            image={getImage(image)}
                            alt={alt}
                            fluid="true"
                          />
                          <MDBCardBody>
                            <MDBCardTitle>{title.text}</MDBCardTitle>
                            <MDBCardText>{description.text}</MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </Link>
                    </nav>
                  </article>
                </MDBCol>
              )
            })}
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
  }

  h2 {
    padding: 0 0 2rem 0;
  }

  .card {
    background: var(--clr-grey-10);
    box-shadow: none;
  }

  .card-column {
    margin-bottom: 2rem;
    display: flex;
  }
`

const query = graphql`
  {
    services: allPrismicServices {
      edges {
        node {
          data {
            number
            description {
              text
            }
            image {
              alt
              gatsbyImageData
            }
            title {
              text
            }
          }
          slug: uid
        }
      }
    }
  }
`

export default Services
