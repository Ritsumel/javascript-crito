import React from 'react'

const ContactInformationCard = ({ className, classNameIcon, title, information1, information2 }) => {
  return (
    <div className={className}>
        <div className="icon"><i className={classNameIcon}></i></div>
        <h3>{title}</h3>
        <p id="p1">{information1}</p>
        <p id="p2">{information2}</p>
    </div>
  )
}

export default ContactInformationCard