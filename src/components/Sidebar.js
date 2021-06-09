import React, { useContext } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link } from 'gatsby'
import clsx from 'clsx'

import { GatsbyContext } from '../context/context'
import NavLink from './NavLink'

const Sidebar = () => {
  const { navLink, linkKey, hideSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar} type="button">
          <MdClose className="icon" />
        </button>
        <div className="links">
          <NavLink />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    display: none;
  }

  .container {
    background: var(--clr-primary-3);
    box-shadow: -21px -3px 62px -21px rgba(54, 53, 53, 0.75);
    /* width: 100vh; */
    height: 100vh;
    /* border-radius: var(--radius); */
    /* position: relative; */
    padding: 2rem 2rem 2rem 2rem;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    /* left: -190px; */
    right: -130px;
    transition: all 0.15s ease-out 0;
    transform: translate3d(-130px, 0, 0);
    animation-timing-function: 1s ease-in;
    /* z-index: 0; */

    button {
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
      text-align: left;

      &:focus {
        transition: var(--transition);
        transform: rotate(180deg);
      }
    }

    .links {
      display: grid;
      gap: 1rem 2rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      a {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        padding: 3px 20px;
        color: var(--clr-white);
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;

        .icon {
          color: #88add2;
          font-size: 2rem;
        }

        .icon {
          color: #0a2540;
        }
      }
    }

    .call-to-action {
      background: var(--clr-primary-1);
      text-align: center;
      font-weight: bold;
      border-radius: 20px;
      border: 5px solid rgb(230, 214, 0, 0.5);
      text-decoration: none;
      padding: 10px 20px;
      box-shadow: rgba(230, 214, 0, 0.25) 0px 50px 100px -20px,
        rgba(230, 214, 0, 0.3) 0px 30px 60px -30px;
      background: var(--clr-primary-2);

      :hover {
        background: var(--clr-primary-4);
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
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .dropdown-menu li {
      border-bottom: 1px solid var(--clr-grey-2);

      :hover {
        background: var(--clr-grey-3);
      }
    }
  }
`
export default Sidebar
