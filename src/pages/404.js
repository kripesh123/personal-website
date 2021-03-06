import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <Seo title="Dead End" />
      <main className="error-page">
        <div className="error-container">
          <h1>Oopsy, El Cucuy Here</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
