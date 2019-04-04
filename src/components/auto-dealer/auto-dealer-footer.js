import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`

const Footer = () => {
  return (
    <StyledFooter className="section">
      <div className="container">
        <div className="columns">
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer