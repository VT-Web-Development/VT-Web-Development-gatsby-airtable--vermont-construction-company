import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

import Title from '../Title'

const Form = () => {
  const {
    contact: { edges: contactUS },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      {contactUS &&
        contactUS.map((contact, index) => (
          <Title title={contact.node.data.title.text} key={index} />
        ))}

      <form
        className="contact-form"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/Success"
      >
        <MDBInput type="hidden" name="bot-field" />
        <MDBInput type="hidden" name="form-name" value="contact" />
        <div className="grey-text">
          <MDBInput
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Subject"
            icon="tag"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            type="textarea"
            rows="2"
            label="Your message"
            icon="pencil-alt"
          />
        </div>
        <div className="center">
          <MDBBtn outline color="secondary">
            Get In Touch
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .center {
    text-align: center !important;
  }

  .btn-secondary {
    color: var(--clr-primary-1) !important;
    border: 2px solid var(--clr-primary-1) !important;
  }

  h2 {
    color: var(--clr-white);
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
            title {
              text
            }
          }
        }
      }
    }
  }
`
export default Form
