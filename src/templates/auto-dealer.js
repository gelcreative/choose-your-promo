import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/auto-dealer/auto-dealer-layout'
import AutoDealerForm from '../components/auto-dealer/auto-dealer-form'

const StyledArticle = styled.article`
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(${props => props.main.bgGradient.topColor}, ${props => props.main.bgGradient.bottomColor});
  position: relative;
  min-height: 800px;
  @media (min-width: 2000px) {
    &::after {
      content: '';
      background: center no-repeat url(${props => props.main.bgImage.image.childImageSharp ? props.main.bgImage.image.childImageSharp.fluid.src : props.main.bgImage.image});
      position: absolute;
      top: 0;
      right: 0;
      left: -80%;
      bottom: 0;
      z-index: 0;
    }
  }
  @media (min-width: 1600px) and (max-width: 2000px) {
    &::after {
      content: '';
      background: center no-repeat url(${props => props.main.bgImage.image.childImageSharp ? props.main.bgImage.image.childImageSharp.fluid.src : props.main.bgImage.image});
      position: absolute;
      top: 0;
      right: 0;
      left: -100%;
      bottom: 0;
      z-index: 0;
    }
  }
  @media (min-width: 1000px) and (max-width: 1600px) {
    &::after {
      content: '';
      background: center no-repeat url(${props => props.main.bgImage.image.childImageSharp ? props.main.bgImage.image.childImageSharp.fluid.src : props.main.bgImage.image});
      position: absolute;
      top: 0;
      right: 0;
      left: -130%;
      bottom: 0;
      z-index: 0;
    }
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    &::after {
      content: '';
      background: center no-repeat url(${props => props.main.bgImage.image.childImageSharp ? props.main.bgImage.image.childImageSharp.fluid.src : props.main.bgImage.image});
      position: absolute;
      top: 0;
      right: 0;
      left: -150%;
      bottom: 0;
      z-index: 0;
    }
  }
`

export const AutoDealerPageTemplate = ({
  promo,
}) => {

  return (
    <StyledArticle className="section" main={promo.main}>
      <div className="container">
        <div className="columns">
          <div className="column  is-9 is-offset-3">
            <AutoDealerForm promo={promo} />
          </div>
        </div>
      </div>
    </StyledArticle>
  )
}

const AutoDealerPage = ({ data }) => {
  const { frontmatter: promo } = data.markdownRemark
  
  return (
    <Layout data={promo}>
      <AutoDealerPageTemplate
        promo={promo}
      />
    </Layout>
  )
}

export default AutoDealerPage

export const AutoDealerQuery = graphql`
  query AutoDealer($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        dealerEmail
        header {
          headerBgColor
          headerLogos {
            logo {
              alt
              image {
                publicURL
                internal {
                  mediaType
                }
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
          headerText {
            address
            phone1
            phone2
          }
          headerTxtColor
        }
        main {
          bgGradient {
            bottomColor
            topColor
          }
          bgImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          bodyTxtColor
          buttons {
            buttonColor
            buttonTxtColor
          }
          promos {
            promoOne {
              disclaimer
              promoImage {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              promoText
            }
            promoTwo {
              disclaimer
              promoImage {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              promoText
            }
          }
        }
        footer {
          footerBgColor
          footerTermsTxt
          footerTxtColor
        }
        submissionConfirmation {
          bgImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          button {
            buttonLink
            buttonText
          }
        }
      }
    }
  }
`