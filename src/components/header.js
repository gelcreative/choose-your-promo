import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import lincolnLogo from '../images/lincoln_logo.svg'

const StyledHeader = styled.header`
  background: ${props => props.theme.gray};
  padding: 2em 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="container columns">
      <img src={lincolnLogo} alt="Lincoln Logo" width="200" />
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
