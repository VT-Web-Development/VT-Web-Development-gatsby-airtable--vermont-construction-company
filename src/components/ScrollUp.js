import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaArrowCircleUp } from 'react-icons/fa'
const windowGlobal = typeof window !== 'undefined' && window
const getPosition = () => (windowGlobal ? window.pageYOffset : undefined)

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(getPosition)

  useEffect(() => {
    if (!windowGlobal) {
      return false
    }

    const handleScroll = () => {
      setShowScroll(getPosition())
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // const checkScrollTop = () => {
  //   if (!showScroll && window.pageYOffset > 400) {
  //     setShowScroll(true)
  //   } else if (showScroll && window.pageYOffset <= 400) {
  //     setShowScroll(false)
  //   }
  // }

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  // Check if window is defined (so if in the browser or in node.js).

  return (
    <Wrapper>
      <FaArrowCircleUp
        className="scroll-top"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: 5rem;

    path {
      color: var(--clr-white);
    }
  }

  .scrollTop {
    width: 100%;
    bottom: 20px;
    align-items: center;
    height: 20px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }

  .scrollTop:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`

export default ScrollUp
