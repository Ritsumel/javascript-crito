import React from 'react'

const Member = ({ image, alt, name, position, className }) => {
  return (
    <div className={className}>
        <img src={image} alt={alt} />
        <h3>{name}</h3>
        <p>{position}</p>
    </div>
  )
}

export default Member