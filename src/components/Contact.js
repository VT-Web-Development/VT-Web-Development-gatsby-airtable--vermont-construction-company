import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Title from './Title'
import Form from './Form/Form'

const Contact = () => {
  const {
    about: { edges: aboutUS },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <BackgroundColor>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="6" className="p-5 left">
              <Form />
            </MDBCol>
            <MDBCol md="6" className="p-5">
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

export default Contact
