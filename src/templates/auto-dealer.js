import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/auto-dealer/auto-dealer-layout'
import AutoDealerForm from '../components/auto-dealer/auto-dealer-form'

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