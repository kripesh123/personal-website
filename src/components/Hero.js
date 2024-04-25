import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Kripesh</h1>
            <h4>Immersed in the world of data and its applications</h4>
            <h4>From software development to deployment, I'm passionate about delivering working software.</h4>
            <h4>Join me on my journey as I explore the realm of data, unlocking insights and driving innovation.</h4>
            <Link to="/contact" className="btn">
              reach out
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage 
        src="../assets/hero-img.png" 
        alt="Owner Image" 
        className="hero-img" 
        placeholder="blurred"
        layout="fullWidth"
        />
      </div>
    </header>
  )
}

export default Hero
