import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero2 from '../Project/Hero2/Hero2'
import AboutContent from './AboutContent/AboutContent'
const About = () => {
  return (
    <div>
       <Navbar/>
       <Hero2 heading ="ABOUT" text="I m a friendly Front-End Developer"/>
       <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About
