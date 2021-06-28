import React from 'react'
import styled from 'styled-components'

const PageHeaderTitle = ({ pageHeaderTitle }) => {
  return (
    <Wrapper>
      <h2>{pageHeaderTitle}</h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
`

export default PageHeaderTitle
