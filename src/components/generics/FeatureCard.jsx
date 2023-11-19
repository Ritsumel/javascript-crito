import React from 'react'

const FeatureCard = ({ className, classNameIcon, title, text }) => {
  return (
    <div className={className}>
        <i className={classNameIcon}></i>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default FeatureCard