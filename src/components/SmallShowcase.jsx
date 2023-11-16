import React from 'react'
import { Link } from 'react-router-dom'
import img_background_lines from '@images/background-lines.svg'

const SmallShowcase = ({ headline, link1, link2, goto }) => {
  return (
    <section className="connect-showcase">
        <img src={img_background_lines} />
        <div className="container">
            <img src="" />
            <div className="links">
                <Link to="/" className="home"><p>{link1}</p></Link>
                <Link to={goto} className="contact"><p>{link2}</p></Link>
            </div>
        <h2>{headline}</h2>
        </div>
    </section>
  )
}

export default SmallShowcase