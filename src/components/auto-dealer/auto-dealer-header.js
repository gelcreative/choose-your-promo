import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PreviewCompatibleImage from '../previewcompatibleimage'
import mapPin from '../../images/map-pin-white.svg'
import phone from '../../images/phone-white.svg'

const StyledHeader = styled.header`
  background: ${props => props.header.headerBgColor};
  a {
    display:block;
    width:100%;
  }
  .logo-columns {
    display: flex;
    align-items: center;
  }
  .logo-columns > .column {
    display: flex;
    &.header-logo > img,
    &.header-logo > .gatsby-image-wrapper {
      max-width: 300px;
      width: 100%;
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
      color: ${props => props.header.headerTxtColor};      
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
      a {
        display:inline;
      }
    }
  }

  @media (min-width: 770px) {
    .header-info-right {
      li {
        &:nth-child(1)::after,
        // &:nth-child(2)::after {
        //   content: '|';
        //   display: inline-block;
        //   position: absolute;
        //   right: 0;
        //   top: 50%;
        //   transform: translateY(-50%);
        // }
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
    .logo-columns {
      flex:1;
      justify-content: center;
    }
    .logo-columns > .column {
      max-width:200px;      
    }

    .header-info-right {
      flex-direction: column;
      li {
        white-space: normal;
      }
      .devider {
        display:none;
      }
    }
  }
`

const Header = ({ data }) => {
  const header = data.header
  return (
    <StyledHeader className="section" header={header} >
      <div className="container">
        <div className="columns">    
          <div className="column is-3">
            <div className="columns logo-columns">
              {header.headerLogos.map((headerLogo, i) => {
                return (
                  <div key={headerLogo.logo.alt} className={`column header-logo header-logo-${i + 1}`}>
                    <a href=""><PreviewCompatibleImage imageInfo={headerLogo.logo} /></a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="column is-9">
            <ul className="header-info-right">
              <li>{header.headerText.address}</li>
              {header.headerText.phone1.length > 1 &&
                <li>Sales: <a href={`tel:${header.headerText.phone1}`}>{header.headerText.phone1}</a></li>
              }
              {header.headerText.phone1.length > 1 && header.headerText.phone2.length > 1 &&
                <span className="devider">&#124;</span>
              }
              {header.headerText.phone2.length > 1 &&                
                <li>Service: <a href={`tel:${header.headerText.phone2}`}>{header.headerText.phone2}</a></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
