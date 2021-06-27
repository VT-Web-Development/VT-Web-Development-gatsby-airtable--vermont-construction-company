import React from 'react'
import { Link, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Layout from '../components/Layout'
import Title from '../components/Title'
import { GetAQuote } from '../components'

const ServicesTemplete = ({ data }) => {
  const { title, description } = data.prismicServices.data
  const image = data.prismicServices.data.image.gatsbyImageData
  const { alt } = data.prismicServices.data.image

  const backgroundImage = getImage(image)

  // Use like this:
  const bgImage = convertToBgImage(backgroundImage)
  return (
    <Wrapper>
      <Layout>
        <BackgroundImage
          Tag="header"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="header-background-image"
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="offset-md-3">
                <article className="header-title">
                  <Title title={title.text} />
                </article>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <GatsbyImage
            image={backgroundImage}
            alt={alt}
            className="background-image"
          />
        </BackgroundImage>

        <section className="section">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <p className="description">{description.text}</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section>
          <MDBContainer fluid className="contact-form">
            <GetAQuote />
          </MDBContainer>
        </section>
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

  p.description {
    font-size: 1.8rem;

    @media (max-width: 300px) {
      p.description {
        font-size: 1rem;
      }
    }
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

  h2 {
    padding: 5rem 0 2rem 0;
  }

  section.section {
    margin: 4rem 0 4rem 0;
  }

  .contact-form {
    padding: 0;
  }
`

export const query = graphql`
  query GetSingleService($slug: String) {
    prismicServices(uid: { eq: $slug }) {
      data {
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
      uid
    }
  }
`

export default ServicesTemplete
