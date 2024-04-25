import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import Jobs from "../components/Jobs"
import Countries from "../components/Countries"
const About = ({ data }) => {
    const {
        about,
        allContentfulJob: {nodes: jobs}
    } = data
    const { childContentfulAboutInfoTextNode, stack, title, image } = about
    const img = getImage(image)
    return (
        <Layout>
            <Seo title="About Me" description="In-depth knowledge of software design and software development life cycles.(Agile) Comprehensive knowledge of Java 8, Spring Boot and Javascript/Typescript, Nodejs, Angular, React Web Development and Software Development." />
            <section className="about-page">
                <div className="section-center about-center">
                <GatsbyImage image={img} alt={title} className="about-img" />
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
            <Jobs jobs={jobs} title="more experiences" style="about-page"></Jobs>
            <Countries />
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
        image {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              layout: CONSTRAINED
            )
        }
    }   

    allContentfulJob(sort: { fields: index}, limit: 5) {
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
