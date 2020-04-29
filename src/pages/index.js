import React from "react"
import Link from "gatsby-link"
import '../layouts/index.css'

import Header from "../components/header.js"
import Card from "../components/card.js"


import figmalogo from "../images/logo-figma.png"
import framerlogo from "../images/logo-framer.png"
import invisionlogo from "../images/logo-invision.png"
import sketchlogo from "../images/logo-sketch.png"
import swiftlogo from "../images/logo-swift.png"

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
                <svg width="100%" height="172" file="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                    
                    M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

                    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                    " />
                    </path>
                </svg>
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
    </div>
)

export default IndexPage