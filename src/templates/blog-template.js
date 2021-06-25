import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const ComponentName = ({ data }) => {
    const { content, title, description, image } = data.blog
    const img = getImage(image)

    const options = {
        renderMark: {

        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                    <article>
                        <img src={node.data.target.fixed.src} alt={title} className="blog-img" />
                    </article>
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: node => {
                return (
                    <>
                        <Link to={`/blogs/${node.data.target.slug}`} className="blog">
                            <article>
                                <div className="blog-card">
                                    <h4>{node.data.target.title}</h4>
                                    <p>{node.data.target.description}</p>
                                </div>
                            </article>
                        </Link>
                    </>
                )
            }
        }
    }

    return (
        <Layout>
            <Seo title={title} description={description} />
            <section className="blog-template">
                <div className="section-center">
                    <article className="blog-content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {img && (
                            <GatsbyImage image={img} alt={title} className="blog-template-img" />
                        )}
                    </article>
                    <article className="blog-content">
                        {renderRichText(content, options)}
                    </article>
                    <Link to="/blog" className="btn center-btn">
                        blog
          </Link>
                </div>
            </section>
        </Layout >
    )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
                                blog: contentfulBlog(slug: {eq: $slug }) {
                                content {
                                raw
            references {
                                ...on ContentfulAsset {
                                contentful_id
                __typename
                fixed(width: 1600) {
                                width
                    height
                    src
                    srcSet
                }
            }
            ... on ContentfulBlog {
                                contentful_id
                __typename
                title
                slug
                description
            }
        }
      }
      title
      description
      image {
                                gatsbyImageData(
                                    placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: FULL_WIDTH
        )
      }
    }
  }
`

export default ComponentName
