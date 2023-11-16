import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({ image, date, month, title, alt, link }) => {
  return (
    <div className="container article-box">
        <Link to={link} className="images-link">
            <div className="images">
                <div className="images-box"><img src={image} alt={alt} />
                    <div className="yellow-box"><p id="p3">{date}</p><p id="p4">{month}</p></div>
                </div>
            </div>
            <p id="p1">Business</p>
            <h3>{title}</h3>
            <p id="p2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </Link>
    </div>
  )
}

export default ArticleBox