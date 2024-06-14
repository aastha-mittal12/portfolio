import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" alt="" className="into-img" />
        </div>
      <div className="content">
        <p>Hi , I'm Aastha Mittal</p>
        <h1>React Developer.</h1>
        <div>
            <Link to ="/project" className='btn'>PROJECTS</Link>
            <Link to ="/contact" className='btn btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
