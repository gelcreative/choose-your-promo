import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import lincolnLogo from '../images/lincoln_logo.svg'
import bayfieldLincolnLogo from '../images/bayfield_lincoln_logo_black.png'
import mapPin from '../images/map-pin.svg'
import phone from '../images/phone.svg'

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

  .header-info-right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    li {
      padding: 0.5rem 3%;
      position: relative;
      flex-shrink: 1;
      
      &:nth-child(1)::after,
      &:nth-child(2)::after {
        content: '|';
        display: inline-block;
        position: absolute;
        right: 0;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader className="section">
    <div className="container">
      <div className="columns">    
        <div className="column is-3">
          <div className="columns logo-columns">
            <div className="column lincoln-logo">
              <img src={lincolnLogo} alt="Lincoln Logo" />
            </div>
            <div className="column bayfield-logo">
              <img src={bayfieldLincolnLogo} alt="Bayfield Lincoln" />
            </div>
          </div>
        </div>
        <div className="column is-9">
          <ul className="header-info-right">
            <li>379 Bayfield St, Barrie, ON L4M 3C5</li>
            <li> Sales: (877) 634-5224 </li>
            <li>Service: (877) 868-1812</li>
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
