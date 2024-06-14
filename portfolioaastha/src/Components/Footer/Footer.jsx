import React from 'react'
import './Footer.css'
import { FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location icon">
                  <FaHome size={20}  style={{color:'#fff' , margin:"2rem"}}/>
                
                    <p>Agra</p>
                  
                </div>

                <div className="phone icon">
                   
                    <h4><FaPhone size={20}  style={{color:'#fff' , margin:"2rem"}}/>7599050743</h4>
                </div>

                <div className="email icon">
                    <h4><FaMailBulk size={20}  style={{color:'#fff' , margin:"2rem"}}/>iaasthamittal@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>AASTHA MITTAL </h4>
                <p>As an experienced Java coder and full-stack developer proficient in MERN technologies, I'm dedicated to delivering high-quality solutions for every project. With a focus on innovation and problem-solving, I thrive in dynamic environments. I'm committed to staying updated with the latest advancements to provide cutting-edge solutions that meet and exceed expectations. Let's work together to bring your ideas to life and achieve success in the digital realm.</p>
                 <div className="social">
                 <Link to="https://www.linkedin.com/in/aastha-mittal-41271a25b/"><FaLinkedin size={30}  style={{color:'#fff' , margin:"2rem"}}/></Link>
                <Link to="https://mail.google.com/mail/u/0/?to=iaasthamittal@gmail.com#compose">   <FaMailBulk size={30}  style={{color:'#fff' , margin:"2rem"}}/></Link> 
   
                 </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
