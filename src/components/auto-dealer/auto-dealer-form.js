import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

import PreviewCompatibleImage from '../previewcompatibleimage'
import braces from '../../images/braces.svg'

const StyledDealerForm = styled.section`
  position: relative;
  z-index: 1;
  h1 {
    font-size: 3.1rem;
    text-transform: uppercase;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

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

  input[type="text"],
  input[type="email"] {
    font-size: 2rem;
    text-align: center;
    border-radius: 15px;
    border: none;
    padding: 1em
  }

  input[type="checkbox"] {
    vertical-align: middle;
    margin-right: 1em;
  }

  input[type="checkbox"] + label {
    font-size: 1.2rem;
    white-space: normal;
  }

  .button,
  input[type="submit"] {
    font-size: 2rem;
    color: ${props => props.main.buttons.buttonTxtColor};
    background-color: ${props => props.main.buttons.buttonColor};
    border-radius: 15px;
    border: none;
    padding: 1.5em;
    text-decoration: none;
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

    .button,
    input {
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    .button,
    input[type="submit"] {
      width: 90%;
    }
  }
`

class AutoDealerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      promo: '',
      dealerOffers: false,
      promoOffers: false,
      isSubmitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  stripHtml(html) {
    const stripped = html.replace(/(<([^>]+)>)/ig, '')
    return stripped
  }

  buttonClick(promo) {
    this.setState({
      promo
    })
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      isSubmitted: true
    })
  }

  render() {
    const { main } = this.props.promo
    const { submissionConfirmation: thanks } = this.props.promo

    if (this.state.promo !== '' && this.state.isSubmitted === false) {
      return (
        <StyledDealerForm className="columns is-centered" main={main}>
          <div className="column has-text-centered">
            <div className="columns">
              <div className="column">
                <h1>Receive Your {ReactHtmlParser(this.state.promo)}</h1>
              </div>
            </div>
            <form onSubmit={this.handleSubmit} data-netlify="true">
              <div className="columns">
                <div className="column">
                  <label htmlFor="first-name" className="visually-hidden">Your First Name</label>
                  <input type="text" placeholder="First Name" id="first-name" name="firstName" onChange={this.handleChange} />
                </div>
                <div className="column">
                  <label htmlFor="last-name" className="visually-hidden">Your Last Name</label>
                  <input type="text" placeholder="Last Name" id="last-name" name="lastName" onChange={this.handleChange} />
                </div>
                <div className="column">
                  <label htmlFor="email" className="visually-hidden">Your Email</label>
                  <input type="email" placeholder="Email" id="email" name="email" onChange={this.handleChange} />
                </div>
              </div>
              <div className="columns">
                <div className="column is-narrow">
                  <input type="checkbox" id="receive-dealer-offers" name="dealerOffers" checked={this.state.dealerOffers} onChange={this.handleChange} />
                  <label htmlFor="receive-dealer-offers">I would like to receive future offers from {this.props.promo.title}</label>
                </div>
                <div className="column is-narrow">
                  <input type="checkbox" id="receive-choose-your-promo-offers" name="promoOffers" checked={this.state.promoOffers} onChange={this.handleChange} />
                  <label htmlFor="receive-choose-your-promo-offers">I would like to receive future promotions and offers from chooseyourpromo.com</label>
                </div>
              </div>
              <input type="submit" value="Claim My Promo" />
              <input type="hidden" value={this.stripHtml(this.state.promo)} />
            </form>
          </div>
        </StyledDealerForm>
      )
    } else if (this.state.promo !== '' && this.state.isSubmitted === true) {
      return (
        <StyledDealerForm className="columns is-centered" main={main}>
          <div className="column has-text-centered">
            <div className="columns">
              <div className="column thank-you">
                <h1>THANK YOU FOR SUBSCRIBING.</h1>
                <p>Check your inbox for promo details.</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="thank-you-image">
                  <PreviewCompatibleImage imageInfo={thanks.bgImage} />
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <a href={thanks.button.buttonLink} target="_blank" rel="noopener noreferrer" className="button">{thanks.button.buttonText}</a>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Link to={'/'}>learn more about chooseyourpromo.com</Link>
              </div>
            </div>
          </div>
        </StyledDealerForm>
      )
    } else {
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
}

export default AutoDealerForm