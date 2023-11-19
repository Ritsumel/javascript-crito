import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ className, title, text, link }) => {
  return (
    <div className={className}>
        <div className="border-left"></div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={link}><button className="btn-yellow btn-arrow"><i className="fa-light fa-arrow-right"></i></button></Link>
    </div>
  )
}

export default ServiceCard