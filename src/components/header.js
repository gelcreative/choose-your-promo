import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import lincolnLogo from '../images/lincoln_logo.svg'
import bayfieldLincolnLogo from '../images/bayfield_lincoln_logo_black.png'

const StyledHeader = styled.header`
  background: ${props => props.theme.gray};

  .logo-columns > .column {
    display: flex;
    align-items: center;

    &.lincoln-logo img {
      width: 150px;
      max-width: 100%;
    }

    &.bayfield-logo img {
      width: 200px;
      max-width: 100%;
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader className="section">
    <div className="container">
      <div className="columns">    
        <div className="column is-5">
          <div className="columns logo-columns">
            <div className="column lincoln-logo">
              <img src={lincolnLogo} alt="Lincoln Logo" />
            </div>
            <div className="column bayfield-logo">
              <img src={bayfieldLincolnLogo} alt="Bayfield Lincoln" />
            </div>
          </div>
        </div>
        <div className="column is-7">
          <ul className="columns">
            <li className="column">379 Bayfield St, Barrie, ON L4M 3C5</li>
            <li className="column"> Sales: (877) 634-5224 </li>
            <li className="column">Service: (877) 868-1812</li>
          </ul>
        </div>
      </div>
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
