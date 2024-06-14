import React from 'react'
import './Workcard.css'
import { Link } from 'react-router-dom'

const Workcard = () => {
 const work =[
    {
        img:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
        title:"Calculator",
        text:"Welcome to our JavaScript calculator project, where precision meets simplicity in computational tasks! Experience efficient calculations with our intuitive interface.",
        view:"https://660f0923f7b3cf4f3dacb9e7--lambent-bombolone-39ff98.netlify.app/",
        source:"https://github.com/aastha-mittal12/Calculator"

    },
    {
        img:"https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
        title:"ShoppingApp",
        text:"Dive into our Shopping App frontend, where user-friendly design meets seamless functionality, creating a delightful online shopping experience.",
        view:"https://legendary-travesseiro-a0be4e.netlify.app/"
,
source:"https://github.com/aastha-mittal12/ShoppingApp"
    },
    {
        img:"https://images.unsplash.com/photo-1512070679279-8988d32161be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D",
        title:"NetflixClone",
        text:"Experience the seamless user interface of our Netflix Clone, offering a sleek design and intuitive navigation for effortless browsing and streaming.",
        view:"https://660f064c80efc74b6dbf8795--heartfelt-salmiakki-6c19ee.netlify.app/"
         , source:"https://github.com/aastha-mittal12/NetflixClone"
    },
    {
        img:"https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm90aW5nfGVufDB8fDB8fHww",
        title:"E-Votiing application",
        text:"Participate in secure and transparent elections from the comfort of your home. Our e-voting application ensures your voice is heard with the highest level of security and convenience.",
        view:"*"
         , source:"https://github.com/aastha-mittal12/Voting-application"
    },
    {
        img:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Movie Playlist application",
        text:"Discover and search for your favorite movies! Add the ones you love to your personal playlist and enjoy a curated collection of your top picks.",
        view:"https://silly-brigadeiros-44e92f.netlify.app/"
         , source:"https://github.com/aastha-mittal12/MOVIEAPPLICATION"
    },
    
]

  return (
    <div className='work-containner'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                work.map((item , index)=>(
                    <div className="project-card" key={index}>
                    <img src={item.img} alt="" />
                    <h2 className='project-title'>{item.title}</h2>
                    <div className="pro-details">
                        <p>{item.text}</p>
                        <div className="pro-btns">
                            <Link to={item.view}className='btn'> View</Link>
                            <Link to= {item.source} className='btn'>Source</Link>
                        </div>
                    </div>
                </div>
                ))
            }
   
        </div>
       
      
    </div>
  )
}

export default Workcard
