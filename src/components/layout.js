/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyle from './globalstyle'
import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <GlobalStyle />
          <main role="main">{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
