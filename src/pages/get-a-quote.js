import React from 'react'
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { Layout, Form, GetAQuote } from '../components'
import Title from '../components/Title'

const getAQuote = () => {
  return (
    <Wrapper>
      <Layout>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <Title title="Request A Quote" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className="contact-form">
          <GetAQuote />
        </MDBContainer>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;

  section {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  h2 {
    padding: 5rem 0 2rem 0;
  }

  .contact-form {
    padding: 2rem 0 0 0;
  }
`

export default getAQuote
