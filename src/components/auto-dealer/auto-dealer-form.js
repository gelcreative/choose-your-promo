import React, { Component } from 'react'
import styled from 'styled-components'

import PreviewCompatibleImage from '../previewcompatibleimage'
import braces from '../../images/braces.svg'

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

  .column {
    margin-bottom: 3rem;
  }

  .heading-column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: center no-repeat url(${braces});
    background-size: 60%;
    h1 {
      font-size: 2.8rem;
      line-height: 1.5;
      .promo-heading-emphasis {
        font-size: 4.8rem;
        font-weight: 600;
      }
    }
  }

  .promo-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .promo-image-container {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    &.columns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .heading-column {
        order: 1;
      }

      .promo-column-1 {
        order: 2;
      }

      .promo-column-2 {
        order: 3;
      }
    }
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
      <StyledDealerForm className="columns is-centered" main={main}>
        <div className="column promo-column promo-column-1 has-text-centered">
          <div className="promo-image-container">
            <PreviewCompatibleImage imageInfo={main.promos.promoOne.promoImage} />
          </div>
          <button className="promo-button">
            {main.promos.promoOne.promoText}
          </button>
          <small>{main.promos.promoOne.disclaimer}</small>
        </div>
        <div className="column has-text-centered heading-column">
          <h1>Choose Your <br /><span className="promo-heading-emphasis">Promo</span> <span className="visually-hidden">from {this.props.promo.title}</span></h1>
        </div>
        <div className="column promo-column promo-column-2 has-text-centered">
          <div className="promo-image-container">
            <PreviewCompatibleImage imageInfo={main.promos.promoTwo.promoImage} />
          </div>
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