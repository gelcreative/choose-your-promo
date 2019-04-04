import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: ${props => props.footer.footerBgColor};
  color: ${props => props.footer.footerTxtColor};
  padding-top: 100px;
  padding-bottom: 100px;

  .choose-your-promo-attrib p {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    span {
      display: inline-block;
      font-size: 1.8rem;
      font-weight: 600;
      margin-top: 1.6rem;
    }
  }

  .choose-your-promp-terms {
    p {
      font-size: 1.4rem;
      margin-bottom: 1.6rem;
      text-transform: uppercase;
    }

    small {
      font-size: 1.2rem;
    }
  } 
`

const Footer = ({ data }) => {
  const footer = data.footer
  return (
    <StyledFooter className="section" footer={footer}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column choose-your-promo-attrib">
                <p>
                  Powered by: <br />
                  <span>chooseyourpromo.com</span>
                </p>
              </div>
              <div className="column choose-your-promp-terms">
                <p>Terms and Conditions Apply</p>
                <small>{footer.footerTermsTxt}</small>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer