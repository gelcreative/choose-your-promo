/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyle from '../globalstyle'
import Header from './auto-dealer-header'
import Footer from './auto-dealer-footer'

const Layout = ({ children, data }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header data={data} />
        <GlobalStyle />
        <main role="main">{children}</main>
        <Footer data={data} />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
