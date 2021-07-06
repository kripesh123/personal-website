import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/SEO"

const ProjectsPage = ({
    data: {
        projects: { nodes: projects },
    },
}) => {
    return (
        <Layout>
            <Seo title="Projects" />
            <section className="projects-page">
                <Projects projects={ projects } title="all projects" />
            </section>
        </Layout>
    )
}
export const query = graphql`
{
  projects: allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        url
        title
        github
        description {
          description
        }
        id
        image {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
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
