import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/auto-dealer/auto-dealer-layout'

export const AutoDealerPageTemplate = ({
  title,
}) => {
  return (
    <h1>{title}</h1>
  )
}

const AutoDealerPage = ({ data }) => {
  const { frontmatter: promo } = data.markdownRemark
  
  return (
    <Layout data={promo}>
      <AutoDealerPageTemplate
        title={promo.title}
        data={data}
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
      }
    }
  }
`