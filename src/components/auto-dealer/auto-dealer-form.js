import React, { Component } from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

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
    position: relative;
    h1 {
      font-size: 2.8rem;
      line-height: 1.5;
      .promo-heading-emphasis {
        font-size: 4.8rem;
        font-weight: 600;
      }
    }
    .brackets {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
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
      flex-wrap: wrap;
      /* flex-direction: column; */
      .column {
        flex: 1 1 600px;
      }

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

  buttonClick(promo) {
    // Remove html tags from promo text
    const sanitizedPromo = promo.replace(/(<([^>]+)>)/ig, '')
    this.setState({
      promo: sanitizedPromo
    })
  }

  render() {
    const { main } = this.props.promo

    return (
      <StyledDealerForm className="columns is-centered" main={main}>
        <div className="column promo-column promo-column-1 has-text-centered">
          <div className="promo-image-container">
            <PreviewCompatibleImage imageInfo={main.promos.promoOne.promoImage} />
          </div>
          <button className="promo-button" onClick={() => this.buttonClick(main.promos.promoOne.promoText)}>
            {ReactHtmlParser(main.promos.promoOne.promoText)}
          </button>
          <small>{main.promos.promoOne.disclaimer}</small>
        </div>
        <div className="column has-text-centered heading-column">
          <h1>Choose Your <br /><span className="promo-heading-emphasis">Promo</span> <span className="visually-hidden">from {this.props.promo.title}</span></h1>
          <img className="brackets" src={braces} aria-hidden="true" alt="braces" />
        </div>
        <div className="column promo-column promo-column-2 has-text-centered">
          <div className="promo-image-container">
            <PreviewCompatibleImage imageInfo={main.promos.promoTwo.promoImage} />
          </div>
          <button className="promo-button" onClick={() => this.buttonClick(main.promos.promoTwo.promoText)}>
            {ReactHtmlParser(main.promos.promoTwo.promoText)}
          </button>
          <small>{main.promos.promoTwo.disclaimer}</small>
        </div>
      </StyledDealerForm>
    )
  }
}

export default AutoDealerForm