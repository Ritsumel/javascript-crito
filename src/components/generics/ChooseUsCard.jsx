import React from 'react'

const ChooseUsCard = ({ className, classNameIcon, title, text }) => {
  return (
    <div className={className}>
        <i className={classNameIcon}></i>
        <h3>{title}</h3>
        <p id="p2">{text}</p>
    </div>
  )
}

export default ChooseUsCard