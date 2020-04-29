import React from "react"
import Link from "gatsby-link"
import '../layouts/index.css'

import Header from "../components/header.js"
import Card from "../components/card.js"
import Section from "../components/section.js"


import figmalogo from "../images/logo-figma.png"
import framerlogo from "../images/logo-framer.png"
import invisionlogo from "../images/logo-invision.png"
import sketchlogo from "../images/logo-sketch.png"
import swiftlogo from "../images/logo-swift.png"
import icon from "../images/icon.png"
import Wave from "../components/wave"

// export default () => <div>Hello world!</div>
const IndexPage = () => (
    <div>
        <Header />
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Hello World<br/> doubleZ</h1>
                <p>I am doubleZ major in Software Engineering in Tongji University.</p>
                <Link to="#">click me</Link>
                <div className="Logos">
                    <img src={require('../images/logo-xcode.png')} width="50" />
                    <img src={figmalogo} width="50" />
                    <img src={framerlogo} width="50" />
                    <img src={invisionlogo} width="50" />
                    <img src={sketchlogo} width="50" />
                    <img src={swiftlogo} width="50" />
                </div>
                <Wave />
            </div>
        </div>
        <div className="Cards">
            <h2>11 courses, more coming</h2>
            <div className="CardGroup">
            <Card 
                title="React for Designers" 
                text="12 section"
                image={require('../images/wallpaper1.jpg')}
            />
            <Card 
                title="Swift for Designers" 
                text="12 section"
                image={require('../images/wallpaper2.jpg')}
            />
            <Card 
                title="Vue for Designers" 
                text="12 section"
                image={require('../images/wallpaper3.jpg')}
            />
            <Card 
                title="JS for Designers" 
                text="12 section"
                image={require('../images/wallpaper4.jpg')}
            />
            </div>
        </div>
        <Section 
            image={require('../images/wallpaper6.jpg')}
            logo={icon}
            title="Title for Section"
            text="Text for the section. Text for the section. Text for the section. Text for the section.Text for the section. Text for the section. Text for the section. Text for the section"
        />
    </div>
)

export default IndexPage