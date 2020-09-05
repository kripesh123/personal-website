import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
    data: {
        projects: { nodes: projects },
    },
}) => {
    return (
        <Layout>
            <SEO title="Projects" />
            <section className="projects-page">
                <Projects projects={ projects } title="all projects" />
            </section>
        </Layout>
    )
}
export const query = graphql`
  {
    projects: allContentfulProject {
        nodes {
          url
          title
          github
          description {
            description
          }
          id
          image {
            fluid {
                ...GatsbyContentfulFluid
            }
          }
          stack {
            title
            id
          }
        }
    }
  }
`

export default ProjectsPage
