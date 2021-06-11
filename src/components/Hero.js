import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import CallToAction from './CallToAction'

const Hero = () => {
  const {
    hero: { edges: hero },
  } = useStaticQuery(query)

  const backgroundImage =
    hero[0].node.data.body[0].primary.icon_image.gatsbyImageData
  const backgroundImageName = hero[0].node.data.body[0].primary.icon_image.alt
  const image = getImage(backgroundImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <Wrapper>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        preserveStackingContext={true}
        loading="lazy"
        fadeIn
        backgroundColor={`#040e18`}
        className="img"
      >
        <GatsbyImage image={image} alt={backgroundImageName} />
        <div className="info">
          <article>
            <h1>We Are Leading The Way Construction Works</h1>
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

  .gatsby-image-wrapper-constrained {
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

    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }

    figure {
      padding: 0px 0px 36px 0px;
    }

    /* .call-to-action {
      color: var(--clr-white);
      text-align: center;
      font-weight: bold;
      border-radius: 20px;
      border: 2px solid rgb(230, 214, 0, 0.5);
      -webkit-text-decoration: none;
      text-decoration: none;
      padding: 20px 16px 20px 16px;
      box-shadow: inset 0 5px 0 var(--clr-primary-4), 0 8px 6px -6px #a6acac;
      background: linear-gradient(
        45deg,
        var(--clr-primary-1),
        var(--clr-primary-2)
      );

      :hover {
        background: var(--clr-primary-1);

        transform: scale(1.03);
      }

      :active {

        transform: scale(0.98);
      }
    }

    .call-to-action-hero a {
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-primary-3);
      font-size: 1.5rem;
      cursor: pointer;
      transition: var(--transition);
    } */

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
    hero: allPrismicHero {
      edges {
        node {
          data {
            body {
              ... on PrismicHeroDataBodyCallToAction {
                id
                primary {
                  button_label
                  button_link {
                    url
                  }
                  icon_image {
                    alt
                    gatsbyImageData(
                      backgroundColor: "grey"
                      layout: CONSTRAINED
                      placeholder: BLURRED
                    )
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

export default Hero
