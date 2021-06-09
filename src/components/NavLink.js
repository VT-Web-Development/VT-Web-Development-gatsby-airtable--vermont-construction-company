import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import clsx from 'clsx'

import { GatsbyContext } from '../context/context'

const NavLink = () => {
  const { navLink, linkKey } = useContext(GatsbyContext)
  console.log(linkKey)
  console.log(navLink)
  // const btnClasses = `${page === 'Get A Quote' ? 'call-to-action' : ``}`

  return (
    <>
      {linkKey.map(link => {
        const currLink = navLink[link]
        console.log(currLink)

        const config = {
          classes: {
            navItem: clsx({
              'dropdown ': currLink?.isDropdown,
            }),
            navLink: clsx({
              'dropdown-toggle': currLink?.isDropdown,
            }).concat(`${currLink?.props?.classes}`),
          },
        }

        console.log(config)
        console.log(navLink.getAQuote)

        return (
          <NavLinkWrapper
            className={config?.classes?.navItem}
            key={currLink?.label}
          >
            {/* Label Button */}
            <button
              className={config?.classes?.navLink}
              data-bs-toggle={currLink?.isDropdown ? 'dropdown' : 'none'}
              type="button"
            >
              {currLink.label !== 'Get A Quote' ? (
                currLink?.label
              ) : (
                <>
                  <Link to={navLink.getAQuote.url}>{currLink?.label}</Link>
                </>
              )}
            </button>

            {currLink?.isDropdown && (
              <ul className="dropdown-menu">
                {console.log(currLink)}
                {currLink?.getDropdownOptions?.()?.map(option => (
                  <li key={option.label}>
                    <Link className="dropdown-item" to={option.url}>
                      {option?.label}
                    </Link>
                  </li>
                ))}
                <div className="caret"></div>
              </ul>
            )}
          </NavLinkWrapper>
        )
      })}
    </>
  )
}

const NavLinkWrapper = styled.li`
  /* padding: 1rem 0; */
  position: relative;

  button {
    color: var(--clr-white);
    border: transparent;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
    cursor: pointer;
  }
`

export default NavLink
