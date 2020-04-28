import React from "react"
import Link from "gatsby-link"
import '../layouts/index.css'

import Header from "../components/header.js"

// export default () => <div>Hello world!</div>
const IndexPage = () => (
    <div>
        <Header />
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Hello World<br/> doubleZ</h1>
                <p>I am doubleZ major in Software Engineering in Tongji University.</p>
                <Link to="#">click me</Link>
            </div>
        </div>
        
    </div>
)

export default IndexPage