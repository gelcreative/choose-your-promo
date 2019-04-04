import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/auto-dealer/auto-dealer-layout"
import SEO from "../components/seo"

export const AutoDealerPageTemplate = ({
  title,
}) => {
  return (
    <h1>{title}</h1>
  )
}

const AutoDealerPage = ({ data }) => {
  const { markdownRemark: promo } = data
  
  return (
    <Layout>
      <AutoDealerPageTemplate
        title={promo.frontmatter.title}
      />
    </Layout>
  )
}

export default AutoDealerPage

export const AutoDealerQuery = graphql`
  query AutoDealer($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`