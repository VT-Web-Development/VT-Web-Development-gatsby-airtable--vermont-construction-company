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
  MDBCardImage,
  MDBView,
} from 'mdbreact'
import { Link, useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Title from './Title'

const Services = () => {
  const {
    services: { edges: services },
  } = useStaticQuery(query)

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
            services.map(service =>
              service.node.data.body[0].items.map(serviceItem => {
                const { title, description } = serviceItem
                const { alt } = serviceItem.image
                {
                  /* const image = serviceItem.image.url */
                }
                const image = serviceItem.image.gatsbyImageData

                return (
                  <MDBCol
                    md="4"
                    key={alt}
                    className="mb-4 d-flex align-items-stretch hover-overlay ripple shadow-1-strong rounded"
                  >
                    <MDBCard>
                      {/* <MDBView hover zoom> */}
                      <GatsbyImage
                        image={getImage(image)}
                        alt={alt}
                        fluid="true"
                      />
                      {/* <MDBCardImage src={image} fluid="true" alt={alt} /> */}
                      {/* </MDBView> */}

                      <MDBCardBody>
                        <MDBCardTitle>{title.text}</MDBCardTitle>
                        <MDBCardText>{description.text}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                )
              })
            )}
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
`

const query = graphql`
  {
    services: allPrismicServices {
      edges {
        node {
          data {
            body {
              ... on PrismicServicesDataBodyImagesSlider {
                id
                items {
                  description {
                    text
                  }
                  image {
                    alt
                    gatsbyImageData
                    url
                  }
                  number
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

export default Services
