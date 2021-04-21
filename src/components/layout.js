import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="" >
      <header className="global-header">
      </header>

      <main>{children}</main>

    </div>
  )
}

export default Layout
