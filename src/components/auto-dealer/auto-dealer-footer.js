import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: ${props => props.footer.footerBgColor};
  color: ${props => props.footer.footerTxtColor};
  padding: 100px 0;
`

const Footer = ({ data }) => {
  const footer = data.footer
  return (
    <StyledFooter className="section" footer={footer}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <p className="choose-your-promo-attrib">
                  Powered by: <br />
                  <span>chooseyourpromo.com</span>
                </p>
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer