import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import './AboutUs.css'

// Export Template for use in CMS preview
export const AboutUsPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  accordion 
}) => (
  <main className="About">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section About--Section1">
      <div className="container About--Section1--Container">
        <div>
          <Content source={body} />
          <Accordion items={accordion}></Accordion>
        </div>
      </div>
    </section>
  </main>
)

const AboutUsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutUsPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutUsPage

export const pageQuery = graphql`
  query AboutUs($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        accordion {
          title
          description
        }
      }
    }
  }
`
