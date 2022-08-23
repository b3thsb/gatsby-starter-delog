import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Chat with me!</Link>
    <ThemeChanger/>
  </nav>
  
)
