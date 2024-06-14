import './Hero2.css'
const Hero2 = (props) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>This is my {props.heading}</h1>
            <p> {props.text}</p>
        </div>

    </div>
  )
}

export default Hero2
