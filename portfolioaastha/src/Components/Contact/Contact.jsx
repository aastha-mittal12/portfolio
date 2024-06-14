import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero2 from '../Project/Hero2/Hero2'
import Contactmain from './Contactmain/Contactmain'
const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Hero2 heading ="CONTACT " text="Lets have a chat"/>
       <Contactmain/>
        <Footer/>
    </div>
  )
}

export default Contact
