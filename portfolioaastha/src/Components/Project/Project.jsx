import React from 'react'
import './Project.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero2 from './Hero2/Hero2'
import Workcard from './workcard/Workcard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2  heading ="PROJECTS" text="Some of my most recent works"/>
      <Workcard/>
      <Footer/>
    </div>
  )
}

export default Project
