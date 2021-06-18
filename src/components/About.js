import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Title from './Title'

const About = () => {
  const {
    about: { edges: aboutUS },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <BackgroundColor>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="5" className="p-5 left">
              <MDBRow>
                {aboutUS &&
                  aboutUS.map(about =>
                    about.node.data.body[0].items.map(item => {
                      const { optional_icon, title, description, number } = item
                      const { alt } = optional_icon
                      const image = optional_icon.gatsbyImageData

                      return (
                        <MDBCol md="12" key={title.text}>
                          <FlexLists key={number}>
                            <div className="icon">
                              <GatsbyImage
                                image={getImage(image)}
                                alt={alt}
                                className="icon-size"
                              />
                            </div>
                            <div className="info">
                              <h3>{title.text}</h3>
                              <p>{description.text}</p>
                            </div>
                          </FlexLists>
                        </MDBCol>
                      )
                    })
                  )}
              </MDBRow>
            </MDBCol>
            <MDBCol md="5" className="p-5">
              {aboutUS &&
                aboutUS.map((about, index) => {
                  const { title, description } = about.node.data.body[0].primary

                  return (
                    <article key={index}>
                      <Title title={title.text} />
                      <p>{description.text}</p>
                    </article>
                  )
                })}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </BackgroundColor>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 5rem 0 0 0;

  h2 {
    padding: 0 0 2rem 0;
  }
`

const BackgroundColor = styled.section`
  background: var(--clr-primary-5);

  .left {
    background: var(--clr-primary-3);
  }
`

const FlexLists = styled.article`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 1rem;

  .info > h3 {
    color: var(--clr-primary-1);
  }

  .info > h3 + p {
    color: var(--clr-white);
  }
`

const query = graphql`
  {
    about: allPrismicAbout {
      edges {
        node {
          data {
            body {
              ... on PrismicAboutDataBodyAlternateGrid {
                id
                items {
                  description {
                    text
                  }
                  optional_icon {
                    alt
                    gatsbyImageData
                  }
                  title {
                    text
                  }
                  number
                }
                primary {
                  description {
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

export default About
