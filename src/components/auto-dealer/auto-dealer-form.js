import React, { Component } from 'react'
import styled from 'styled-components'

import PreviewCompatibleImage from '../previewcompatibleimage'

const StyledDealerForm = styled.section`
  button {
    color: ${props => props.main.buttons.buttonTxtColor};
    background-color: ${props => props.main.buttons.buttonColor};
  }
`

class AutoDealerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promo: '',
      isSubmitted: false,
    }
  }

  render() {
    const { main } = this.props.promo

    return (
      <StyledDealerForm className="columns" main={main}>
        <div className="column promo-column promo-column-1">
          <PreviewCompatibleImage imageInfo={main.promos.promoOne.promoImage} />
          <button className="promo-button">
            {main.promos.promoOne.promoText}
          </button>
          <small>{main.promos.promoOne.disclaimer}</small>
        </div>
        <div className="column has-text-centered">
          <h1>Choose Your <span className="promo-heading-emphasis">Promo</span> <span className="visually-hidden">from {this.props.promo.title}</span></h1>
        </div>
        <div className="column promo-column promo-column-2">
          <PreviewCompatibleImage imageInfo={main.promos.promoTwo.promoImage} />
          <button className="promo-button">
            {main.promos.promoTwo.promoText}
          </button>
          <small>{main.promos.promoTwo.disclaimer}</small>
        </div>
      </StyledDealerForm>
    )
  }
}

export default AutoDealerForm