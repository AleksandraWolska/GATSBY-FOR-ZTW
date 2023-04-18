import React from "react"
import TemplateWrapper from "../components/TemplateWrapper"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  console.log(data)
  
  return (
    <TemplateWrapper data={data}>
      {() =>
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="article-box">
            {console.log(node.frontmatter.thumbnailImage)}
            <Link
              to={node.fields.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              
              <h3 className="title">{node.frontmatter.title}</h3>
            </Link>
            <p className="author">
              Author: <i>{node.frontmatter.author}</i>
            </p>
            <p className="date">
              {node.frontmatter.date} {node.timeToRead}min read
            </p>
            <p className="excerpt">{node.excerpt}</p>
            {node.frontmatter.thumbnailImage &&
                        <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fixed} />
                    }
          </div>
        ))
      }
    </TemplateWrapper>
  )
}
export default IndexPage

export const query = graphql`
query HomePageQuery {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
          author
          thumbnailImage {
            childImageSharp {
              fixed(height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }          

        }
        excerpt
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}
`