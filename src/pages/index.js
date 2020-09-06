import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Jobs from "../components/Jobs"
import Newsletters from "../components/Newsletters"

export default ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
    allContentfulBlog: { nodes: blogs },
    allContentfulJob: { nodes: jobs }
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs jobs={jobs} title="experience" showLink/>
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
      <Newsletters />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description {
          description
        }
        title
        url
        image {
            fluid {
              ...GatsbyContentfulFluid
            }
        }
        stack {
          id
          title
        }
      }
    }
    allContentfulBlog(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
            fluid {
              ...GatsbyContentfulFluid
            }
        }
      }
    }
    
    allContentfulJob(sort: { fields: company }, limit: 3) {
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

