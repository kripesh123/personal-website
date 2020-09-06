import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import Jobs from "../components/Jobs"
const About = ({ data }) => {
    const {
        about,
        allContentfulJob: {nodes: jobs}
    } = data
    const { childContentfulAboutInfoTextNode, stack, title, image } = about

    return (
        <Layout>
            <SEO title="About Me" description="about webdev" />
            <section className="about-page">
                <div className="section-center about-center">
                    <Image fluid={image.fluid} className="about-img" />
                    <article className="about-text">
                        <Title title={title} />
                        <p>{childContentfulAboutInfoTextNode.info}</p>
                        <div className="about-stack">
                            {stack.map(item => {
                                return <span key={item.id}>{item.title}</span>
                            })}
                        </div>
                    </article>
                </div>
            </section>
            <Jobs jobs={jobs} title="more info"></Jobs>
        </Layout>
    )
}

export const query = graphql`
{
    about: contentfulAbout(info: {}) {
        stack {
        id
        title
        }
        title
        childContentfulAboutInfoTextNode{
        info
        }
        image{
            fluid {
                ...GatsbyContentfulFluid
            }
        }
    }   

    allContentfulJob(sort: { fields: company}, limit: 3, skip: 1) {
        nodes {
          id
          company
          date
          position
          description {
            id
            name
          }
        }
    }
  }
`

export default About
