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
            <h4>freelance web and software Developer</h4>
            <Link to="/contact" className="btn">
              contact me
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
