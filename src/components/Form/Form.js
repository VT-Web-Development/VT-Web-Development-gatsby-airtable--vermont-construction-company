import React from 'react'
import styled from 'styled-components'
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

const Form = () => {
  return (
    <>
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
        <Center>
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </Center>
      </form>
    </>
  )
}

const Center = styled.div`
  text-align: center;

  .btn-secondary {
    color: var(--clr-primary-1) !important;
    border: 2px solid var(--clr-primary-1) !important;
  }
`

export default Form
