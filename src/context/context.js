import React, { useState } from 'react'
import { links, linkKeys } from '../constants/links'

const GatsbyContext = React.createContext()

//Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [navLink, setNavLinks] = useState(links)
  const [linkKey, setLinkKey] = useState(linkKeys)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, navLink, linkKey, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
