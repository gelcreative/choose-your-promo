import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import lincolnLogo from '../images/lincoln_logo_white.svg'
import dealerLogo from '../images/whiteoak_lincoln.png'
import mapPin from '../images/map-pin-white.svg'
import phone from '../images/phone-white.svg'

const StyledHeader = styled.header`
  background: ${props => props.theme.black};

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
      white-space: nowrap;
      color: ${props => props.theme.white};
      
      &:nth-child(1)::before,
      &:nth-child(2)::before {
        display: inline-block;
        vertical-align: middle;
        margin-right: 1em;
      }

      &:nth-child(1)::before{
        content: url(${mapPin});
        width: 15px;
      }

      &:nth-child(2)::before {
        content: url(${phone});
        width: 10px;
      }
    }
  }

  @media (min-width: 770px) {
    .header-info-right {
      li {
        &:nth-child(1)::after,
        &:nth-child(2)::after {
          content: '|';
          display: inline-block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }

  @media (max-width: 769px) {
    .column,
    ul,
    li {
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    .header-info-right {
      flex-direction: column;
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
              <img src={dealerLogo} alt="Bayfield Lincoln" />
            </div>
          </div>
        </div>
        <div className="column is-9">
          <ul className="header-info-right">
            <li>3285 MAVIS RD. MISSISSAUGA, ON, L5C 1T7</li>
            <li>Sales: (905) 270-8210</li>
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
