import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { Layout, GetAQuote } from '../components'
import Title from '../components/Title'
import ScrollUp from '../components/ScrollUp'

const getAQuote = ({ data }) => {
  const {
    quote: { edges: quote },
  } = data

  const title = quote[0].node.data.title.text
  const backgroundImage = quote[0].node.data.image.gatsbyImageData
  const backgroundImageAlt = quote[0].node.data.image.alt

  const image = getImage(backgroundImage)

  // Use like this:
  const bgImage = convertToBgImage(image)
  return (
    <Wrapper>
      <Layout>
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="header-background-image"
        >
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol md="6" className="offset-md-3">
                <article className="header-title">
                  <Title title={title} />
                </article>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <GatsbyImage
            image={image}
            alt={backgroundImageAlt}
            className="background-image"
          />
        </BackgroundImage>

        <MDBContainer fluid className="contact-form">
          <GetAQuote />
        </MDBContainer>

        <ScrollUp />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .header-background-image {
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .background-image {
    position: relative;
    display: none;
  }

  article.header-title {
    background: var(--bg-transparent);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  article.header-title h3 {
    letter-spacing: 2px;
  }

  section {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  h2 {
    padding: 5rem 0 2rem 0;
  }

  .contact-form {
    padding: 0;
  }
`

export const query = graphql`
  {
    quote: allPrismicGetAQuote {
      edges {
        node {
          data {
            image {
              alt
              gatsbyImageData
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

export default getAQuote
