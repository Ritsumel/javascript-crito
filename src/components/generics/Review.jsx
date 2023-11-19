import React from 'react'

const Review = ({ className1, className2, comment, image, name, position }) => {
  return (
    <div className={className1}>
        <div className="review-stars"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
        <p id="p2">{comment}</p>
        <div className={className2}>
            <img src={image} />
            <h3>{name}</h3>
            <p id="p3">{position}</p>
        </div>
    </div>
  )
}

export default Review