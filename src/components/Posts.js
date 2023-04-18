import React from "react"
import { Link } from "gatsby-link"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Posts = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h4 style={{ color: 'rgb(165, 164, 164)' }}>
        {post.frontmatter.author}
        <span style={{ fontSize: '0.8em' }}> -{post.frontmatter.date}</span>
      </h4>
      {/* <StaticImage
        src={`../images/${post.frontmatter.imgSource}`}
        alt={post.frontmatter.title}
        placeholder="blurred"
        layout="fullWidth"
        quality={90}
      /> */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export default Posts

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`;
