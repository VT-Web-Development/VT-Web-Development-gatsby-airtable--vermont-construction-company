import React from 'react'
import styled from 'styled-components'

const CallToAction = ({ children }) => {
  return (
    <Wrapper>
      <button className="call-to-action">{children}</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: transparent;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 500;
  width: 100%;
  text-transform: capitalize;
  position: relative;

  .call-to-action {
    color: var(--clr-primary-3);
    text-align: center;
    font-weight: bold;
    border-radius: 20px;
    border: 5px solid rgb(230, 214, 0, 0.5);
    text-decoration: none;
    padding: 14px 28px;
    box-shadow: rgba(230, 214, 0, 0.25) 0px 50px 100px -20px,
      rgba(230, 214, 0, 0.3) 0px 30px 60px -30px;
    background: linear-gradient(
      45deg,
      var(--clr-primary-1),
      var(--clr-primary-2)
    );

    :hover {
      background: var(--clr-primary-2);
      /* Effect */
      transform: scale(1.03);
    }

    :active {
      /* Effect */
      transform: scale(0.98);
    }
  }

  .call-to-action a {
    text-transform: capitalize;
    letter-spacing: 5px;
    color: var(--clr-primary-3);
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
`

export default CallToAction
