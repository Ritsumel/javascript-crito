import React from 'react'
import { Link } from 'react-router-dom'
import img_backgroundlines from '@images/background-lines.svg'
import img_showcaseimage from '@images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundlines} alt="" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Link to="/Consulting" className="btn-yellow">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></Link>
                <Link to="/Services" className="btn-yellow btn-transparent">Learn More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <img src={img_showcaseimage} width="623" height="692" alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default Showcase