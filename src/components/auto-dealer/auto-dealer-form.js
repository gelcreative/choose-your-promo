import React, { Component } from 'react'
import PropTypes from "prop-types"
import MailchimpSubscribe from "../MailchimpSubscribe";
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
    margin-bottom:5px;
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
    line-height: 1.5em;
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
    padding: 1em;
    border: 1px solid #ccc;
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
// a basic form
const CustomSignupForm = ({ status, message, onValidated, offer, step, formaction, promoTitle, dealerEmail }) => {
  let email, fname, lname, promo, dealerOffers, promoOffers;
  const submit = () =>
    email &&
    fname &&
    lname &&
    promo &&
    dealerOffers &&
    promoOffers &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      PROMO: promo.value,
      PROMOS: promoOffers.checked,
      DEALERS: dealerOffers.checked,
      DEALERNAME: promoTitle,
      DEALERMAIL: dealerEmail,
    });
 
  return (
    <form onSubmit={formaction} name="promoForm" data-netlify="true">
      <div className="columns">
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="column">
          <input
            style={{ fontSize: "2em", padding: 5 }}
            ref={node => (fname = node)}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="column">
          <input
            style={{ fontSize: "2em", padding: 5 }}
            ref={node => (lname = node)}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="column">
          <input
            style={{ fontSize: "2em", padding: 5 }}
            ref={node => (email = node)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="column">
          <input
            ref={node => (promo = node)}
            type="hidden"
            value={offer}
          />       
        </div>
      </div>
      <div className="columns">
        <div className="column is-narrow">
          <input type="checkbox" id="receive-dealer-offers" name="dealerOffers" ref={node => (dealerOffers = node)} />
          <label htmlFor="receive-dealer-offers">I would like to receive future offers from {promoTitle}</label>
        </div>
        <div className="column is-narrow">
          <input type="checkbox" id="receive-choose-your-promo-offers" name="promoOffers" ref={node => (promoOffers = node)} />
          <label htmlFor="receive-choose-your-promo-offers">I would like to receive future promotions and offers from chooseyourpromo.com</label>
        </div>
      </div>
      <input type="submit" value="Claim My Promo" onClick={submit} />
      <input type="hidden" value={step}/>
    
    </form>
  );
};

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
    const url = "https://gelcreative.us20.list-manage.com/subscribe/post?u=82a58f8438d2a92919b416121&amp;id=0826323f30"

    if (this.state.promo !== '' && this.state.isSubmitted === false) {
      return (        
        <StyledDealerForm className="columns is-centered" main={main}>
          <div className="column has-text-centered">
          
            <div className="columns">
            {/* <a href="">back</a> */}
              <div className="column">
                <h1>Receive Your {ReactHtmlParser(this.state.promo)}</h1>
              </div>
            </div>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomSignupForm
                  status={status}
                  message={message}
                  offer={ReactHtmlParser(this.state.promo)}
                  step={this.stripHtml(this.state.promo)}
                  onValidated={formData => subscribe(formData)}
                  formaction={this.handleSubmit}
                  currentForm={this.state.promo}
                  promoTitle={this.props.promo.title}
                  dealerEmail={this.props.promo.dealerEmail}
                />
              )}
            />            
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