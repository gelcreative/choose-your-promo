import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article className="section">
      <div className="container">
        <div className="columns"></div>
      </div>
    </article>
  </Layout>
)

export default IndexPage
