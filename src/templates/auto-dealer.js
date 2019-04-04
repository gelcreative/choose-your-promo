import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/auto-dealer/auto-dealer-layout'
import PreviewCompatibleImage from '../components/previewcompatibleimage'

const StyledArticle = styled.article`
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(${props => props.main.bgGradient.topColor}, ${props => props.main.bgGradient.bottomColor});

  .promo-column {
    max-width: 250px
  }
`

export const AutoDealerPageTemplate = ({
  promo,
}) => {

  const { main } = promo

  return (
    <StyledArticle className="section" main={main}>
      <div className="container">
        <div className="columns">
          <div className="column  is-10 is-offset-2">
            <div>
              <div className="columns">
                <div className="column promo-column promo-column-1">
                  <PreviewCompatibleImage imageInfo={main.promos.promoOne.promoImage} />
                </div>
                <div className="column has-text-centered">
                  <h1>Choose Your <span className="promo-heading-emphasis">Promo</span> <span className="visually-hidden">from {promo.title}</span></h1>
                </div>
                <div className="column promo-column promo-column-2">
                  <PreviewCompatibleImage imageInfo={main.promos.promoTwo.promoImage} />
                </div>
              </div>
            </div>
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
      }
    }
  }
`