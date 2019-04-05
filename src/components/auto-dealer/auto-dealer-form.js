import React, { Component } from 'react'
import styled from 'styled-components'

import PreviewCompatibleImage from '../previewcompatibleimage'

const StyledDealerForm = styled.section`
  button {
    color: ${props => props.main.buttons.buttonTxtColor};
    background-color: ${props => props.main.buttons.buttonColor};
    font-size: 2.4rem;
    padding: 1em 2em;
    border-radius: 15px;
  }

  small {
    font-size: 1.6rem;
  }

  .gatsby-image-wrapper,
  button {
    margin-bottom: 3rem;
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
        <div className="column promo-column promo-column-1 has-text-centered">
          <PreviewCompatibleImage imageInfo={main.promos.promoOne.promoImage} />
          <button className="promo-button">
            {main.promos.promoOne.promoText}
          </button>
          <small>{main.promos.promoOne.disclaimer}</small>
        </div>
        <div className="column has-text-centered">
          <h1>Choose Your <span className="promo-heading-emphasis">Promo</span> <span className="visually-hidden">from {this.props.promo.title}</span></h1>
        </div>
        <div className="column promo-column promo-column-2 has-text-centered">
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