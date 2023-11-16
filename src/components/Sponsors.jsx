import React from 'react'
import img_paperz from '@images/paperz.svg'
import img_dorfus from '@images/dorfus.svg'
import img_martino from '@images/martino.svg'
import img_square from '@images/square.svg'
import img_gobona from '@images/gobona.svg'

const Sponsors = () => {
  return (
    <section className="sponsors">
        <div className="container">
            <a className="paperz" href="#">
                <img src={img_paperz} alt="paperz" />
            </a>
            <a className="dorfus" href="#">
                <img src={img_dorfus} alt="dorfus" />
            </a>
            <a className="martino" href="#">
                <img src={img_martino} alt="martino" />
            </a>
            <a className="square" href="#">
                <img src={img_square} alt="square" />
            </a>
            <a className="gobona" href="#">
                <img src={img_gobona} alt="gobona" />
            </a>
        </div>
    </section>
  )
}

export default Sponsors