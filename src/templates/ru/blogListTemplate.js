import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/ru/layout"
import PostList from "../../components/ru/postList"
import { SEO } from "./../../components/seo"

const RuBlogIndex = ({ data, pageContext }) => (
  <Layout
    mainConf="list"
    title={pageContext.title}
    section={pageContext.section}
    subsection={pageContext.subsection}
    crumbs={pageContext.breadcrumb.crumbs}
    languageName=""
    anotherLanguageLink=""
    bannerParagraph={[
      <h1>Остальное</h1>,
      <p>А всё остальное, что пишется в блоге – остается в этом блоге</p>
    ]}
  >
    <PostList
      posts={data.allMarkdownRemark.edges}
      baseUrl={pageContext.baseUrl}
      pageContext={pageContext}
    />
  </Layout>
)

export default RuBlogIndex

export const query = graphql`
  query RuBlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit,
      skip: $skip,
      sort: { frontmatter: {date: DESC}},
      filter: {fileAbsolutePath: { regex: "/\/blog\//"}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
            previewImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH,
                  breakpoints: [278],
                  transformOptions: {
                    cropFocus: ATTENTION,
                    fit: COVER
                  },
                  quality: 70
                )
              }
            }
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  }
`

export const Head = ({ location, data, pageContext }) => (
  <SEO 
    path={location.pathname}
    data={data}
    frontmatter={data?.markdownRemark?.frontmatter}
    pageContext={pageContext}
  >

  </SEO>
)
