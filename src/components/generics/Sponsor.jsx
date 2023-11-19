import React from 'react'

const Sponsor = ({ classNameSponsor, image, alt }) => {
  return (
    <a className={classNameSponsor} href="#">
        <img src={image} alt={alt} />
    </a>
  )
}

export default Sponsor