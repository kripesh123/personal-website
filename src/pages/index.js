import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Jobs from "../components/Jobs"
import Newsletters from "../components/Newsletters"
import Countries from "../components/Countries"

const App = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
    allContentfulBlog: { nodes: blogs },
    allContentfulJob: { nodes: jobs }
  } = data

  return (
    <Layout>
      <Seo title="Kripesh Bista" description="A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry. Skilled in Java, Spring Boot, Javascript, Typescript, Nodejs, Angular, React, Redux." />
      <Hero />
      <Services />
      <Jobs jobs={jobs} title="experiences" showLink/>
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest blogs" showLink />
      <Countries />
      <Newsletters />
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulJob(sort: { fields: index }, limit: 3) {
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
  allContentfulProject(filter: { featured: { eq: true } }) {
    nodes {
      github
      id
      description {
        description
      }
      title
      url
      stack {
        id
        title
      }
      image {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: CONSTRAINED
        )
      }
    }
  }
  allContentfulBlog(sort: { fields: date, order: DESC }, limit: 6) {
    nodes {
      slug
      description
      date(formatString: "MMMM Do, YYYY")
      id
      title
      category
      image {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: CONSTRAINED
        )
      }
    }
  }
}
`
export default App
