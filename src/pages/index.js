import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

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

import staticdata from "../../staticdata.json"
import Cell from "../components/cell"


const SectionCaption = styled.p`
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #94A4BA;
    text-align: center;
`
const SectionCellGroup = styled.div`
    max-width: 800;
    margin: 0 auto 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    padding: 0 20px;
    @media (max-width: 640px){
        grid-template-columns: repeat(1,1fr);
    }
`

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
        
        <SectionCaption>Section title</SectionCaption>
        <SectionCellGroup>
            {staticdata.cells.map(cell => (
            <Cell 
                title={cell.title} 
                image={cell.image}
            />
            ))}
        </SectionCellGroup>
        
    </div>
)

export default IndexPage