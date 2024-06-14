import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='aboutmid'>
        <div className="leftdiv">
            <h1>Who Am I?</h1>
            <p>As a skilled professional, I excel in both frontend development and working with the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. With a strong foundation in Java coding, I bring efficiency and precision to every project I undertake.</p>
            <Link  className="btn"to="/contact">Contact</Link>
        </div>
      <div className="rightdiv">
        <img src="https://swapinfotech.com/wp-content/uploads/2022/12/programminglanguages.-1.jpg" alt="" />

      </div>
    </div>
  )
}

export default AboutContent
