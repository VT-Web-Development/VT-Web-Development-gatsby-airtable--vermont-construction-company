import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Form from './Form/Form'

const Contact = () => {
  const {
    contact: { edges: contactUS },
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
              {contactUS &&
                contactUS.map((contact, index) => {
                  const {
                    headline,
                    request_message,
                    description,
                  } = contact.node.data

                  return (
                    <article key={index}>
                      <h3>{headline.text}</h3>
                      <p>{description.text}</p>
                      <h4>{request_message.text}</h4>
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

  article p,
  article h3,
  article h4 {
    padding: 1rem 0 1rem 0;
  }
`

const BackgroundColor = styled.section`
  background: var(--clr-primary-5);

  .left {
    background: var(--clr-primary-3);
  }
`

const query = graphql`
  {
    contact: allPrismicContact {
      edges {
        node {
          data {
            description {
              text
            }
            headline {
              text
            }
            request_message {
              text
            }
          }
        }
      }
    }
  }
`

export default Contact
