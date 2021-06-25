import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar" >
            <div className="nav-center" >
                <div className="nav-header" >
                    <Link to="/">
                        <StaticImage
                            src="../assets/logo.svg"
                            placeholder="blurred"
                            layout="constrained"
                            alt="logo"
                        />
                    </Link>
                    <button type="button" className="toggle-btn"
                        onClick={toggleSidebar} >
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <PageLinks styleClass="nav-links" > </PageLinks>
            </div>
        </nav>
    )
}

export default Navbar