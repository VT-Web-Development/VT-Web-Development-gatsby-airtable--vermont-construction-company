import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import CallToAction from './CallToAction'

const Hero = ({ hero }) => {
  const {
    house: { nodes: house },
  } = useStaticQuery(query)

  const logoImage = hero[0].data.image.localFiles[0]
  const { name: logoName } = hero[0].data
  const backgroundImage =
    house[0].data.image.localFiles[0].childImageSharp.fluid
  const { name: backgroundImageName } = hero[0].data

  return (
    <Wrapper>
      <BackgroundImage
        Tag="section"
        fluid={backgroundImage}
        preserveStackingContext={true}
        loading="lazy"
        fadeIn
        backgroundColor={`#040e18`}
        className="img"
        alt={backgroundImageName}
      >
        <div className="info">
          <article>
            <figure>
              <GatsbyImage image={getImage(logoImage)} alt={logoName} />
            </figure>

            <CallToAction>
              <Link to="/quote">Get Your Free Quote</Link>
            </CallToAction>
          </article>
        </div>
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  margin-top: -5rem;
  position: relative;

  .img {
    height: 100%;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;

    figure {
      padding: 0px 0px 36px 0px;
    }
    .call-to-action {
      background: transparent;
      border: 5px solid var(--clr-primary-1);
      padding: 10px 16px 10px 16px;

      :hover {
        background: var(--clr-primary-1);
      }
    }

    .call-to-action a {
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1.5rem;
      cursor: pointer;
      transition: var(--transition);

      /* @media (max-width: 300px) {
        letter-spacing: 0;
        font-size: 0.5rem;
      } */

      /* @media (max-width: 430px) {
        letter-spacing: 0;
        font-size: 1rem;
      } */
    }

    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
`

const query = graphql`
  {
    house: allAirtable(
      filter: { table: { eq: "Hero" }, data: { name: { eq: "house" } } }
    ) {
      nodes {
        data {
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export default Hero
