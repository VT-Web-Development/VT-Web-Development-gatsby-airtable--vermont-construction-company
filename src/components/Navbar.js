import React, { useContext } from 'react'
import styled from 'styled-components'
import { GoThreeBars } from 'react-icons/go'
import { Link, useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import NavLink from './NavLink'
import { GatsbyContext } from '../context/context'

const Navbar = () => {
  const {
    logo: { edges: logo },
  } = useStaticQuery(query)

  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)

  const logoImage = logo[0].node.data.image.gatsbyImageData
  const logoName = logo[0].node.data.image.alt

  return (
    <Wrapper>
      <div className="nav-wrap">
        <div className="nav-logo-background">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <figure>
                  <GatsbyImage image={getImage(logoImage)} alt={logoName} />
                </figure>
              </Link>
              {!isSidebarOpen && (
                <button
                  className="toggle-btn"
                  onClick={showSidebar}
                  type="button"
                >
                  <GoThreeBars />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="nav-link-background">
          <>
            <ul className="nav nav-links">
              <Dropdown>
                <NavLink />
              </Dropdown>
            </ul>
          </>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: var(--clr-primary-3);
  z-index: 1;
  display: grid;

  .nav-wrap {
    display: flex;

    @media (max-width: 800px) {
      display: block;
    }
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-logo-background {
    background: var(--clr-primary-1);
    padding: 20px;
  }

  .nav-link-background {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 30px 20px 30px;

    @media (max-width: 800px) {
      padding: 0;
    }
  }

  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100%;
      height: auto;
    }

    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: none;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        color: var(--clr-primary-3);
      }

      &:focus {
        transition: var(--transition);
        transform: rotate(180deg);
      }
    }
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 800px) {
    .nav {
      display: flex;
      align-items: center;

      /* box-shadow: rgba(129, 162, 182, 0.2) 0px 2px 18px 0px; */
      box-sizing: border-box;
      flex-direction: row;
      justify-content: space-between;
    }

    .nav-wrap {
      display: flex;
    }

    .nav-logo-background {
      background: var(--clr-primary-1);
      padding: 20px 30px 20px 30px;
      width: 230px;
      flex: 0 0 230px;
    }

    .nav-header {
      .toggle-btn {
        display: none;
      }
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: baseline;
    }

    li {
      position: relative;
    }
  }
`

const Dropdown = styled.div`
  /* Dropdown Menu */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    position: relative;

    .dropdown-menu {
      position: absolute;
      top: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      visibility: hidden;
      padding: 2rem;
      background: var(--clr-white);
      border-radius: var(--radius);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 4rem;

      .caret {
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--clr-white);
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover .dropdown-menu {
      position: absolute;
      top: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 2rem;
      background: var(--clr-white);
      border-radius: var(--radius);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1rem;
      grid-gap: 1rem 1rem;
      visibility: visible;
    }
  }

  .dropdown a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    grid-gap: 0.5rem;
    align-items: center;
    color: #0a2540;
    text-transform: capitalize;
    font-weight: 700;
  }
`

export const query = graphql`
  {
    logo: allPrismicImages(
      filter: {
        data: { image: { alt: { eq: "Vermont Construction Company." } } }
      }
    ) {
      edges {
        node {
          data {
            image {
              alt
              gatsbyImageData(
                width: 150
                backgroundColor: "grey"
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`

export default Navbar
