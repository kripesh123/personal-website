import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const { content, title, description, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <p>{description}</p>
            {image && (
              <Image fluid={image.fluid} className="blog-template-img" />
            )}
          </article>
          <article className="blog-content">
            { documentToReactComponents(content.json)}
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      content {
        json
      }
      title
      description
      image {
        fluid {
            ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName
