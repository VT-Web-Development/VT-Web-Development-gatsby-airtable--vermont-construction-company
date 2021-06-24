import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { GetAQuote, Layout } from '../components'
import Title from '../components/Title'

const AboutUsPage = ({ data }) => {
  const {
    aboutUs: { edges: aboutUs },
  } = data
  console.log(aboutUs[0])
  const title = aboutUs[0].node.data.body[0].primary.title.text
  const subTitle = aboutUs[0].node.data.body[0].primary.sub_title.text
  const backgroundImage =
    aboutUs[0].node.data.body[0].primary.optional_image.gatsbyImageData
  const backgroundImageAlt =
    aboutUs[0].node.data.body[0].primary.optional_image.alt

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
                  <h3>{subTitle}</h3>
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

        <MDBContainer id="profile">
          <section id="add-space">
            <MDBRow>
              {aboutUs[0].node.data.body[0].items.map((item, index) => {
                const profileImage = item.image.gatsbyImageData
                const profileAlt = item.image.alt
                const profileDecription = item.description.text
                const profileIName = item.name.text
                const profilePosition = item.position.text

                console.log(item)
                return (
                  <section className="profile">
                    <MDBCol md="6" key={index}>
                      <header>
                        <h3>{profileIName}</h3>
                        <h4>{profilePosition}</h4>
                      </header>
                      <article>
                        <p>{profileDecription}</p>
                      </article>
                    </MDBCol>
                    <MDBCol md="6">
                      <figure>
                        <GatsbyImage
                          image={getImage(profileImage)}
                          alt={profileAlt}
                        />
                      </figure>
                    </MDBCol>
                  </section>
                )
              })}
            </MDBRow>
          </section>
        </MDBContainer>

        <MDBContainer fluid className="contact-form">
          <GetAQuote />
        </MDBContainer>
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
  /* min-height: 100vh; */

  section {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  h2 {
    padding: 5rem 0 2rem 0;
  }

  #add-space {
    margin-top: 4rem !important;
    padding: 5rem 0 0 0 !important;
  }

  #profile {
    margin-bottom: 4rem !important;
  }

  .profile {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .profile + .profile {
    padding: 5rem 0 0 0 !important;
  }

  .contact-form {
    padding: 0;
  }
`

export const query = graphql`
  {
    aboutUs: allPrismicAboutUsPage {
      edges {
        node {
          data {
            body {
              ... on PrismicAboutUsPageDataBodyAlternateGrid {
                id
                items {
                  description {
                    text
                  }
                  image {
                    alt
                    gatsbyImageData
                  }
                  name {
                    text
                  }
                  position {
                    text
                  }
                }
                primary {
                  image_side
                  optional_image {
                    alt
                    gatsbyImageData
                  }
                  sub_title {
                    text
                  }
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

export default AboutUsPage
