import React from 'react'
import img_paperz from '@images/paperz.svg'
import img_dorfus from '@images/dorfus.svg'
import img_martino from '@images/martino.svg'
import img_square from '@images/square.svg'
import img_gobona from '@images/gobona.svg'
import Sponsor from './generics/Sponsor'

const Sponsors = () => {
  return (
    <section className="sponsors">
        <div className="container">
            <Sponsor classNameSponsor={"paperz"} image={img_paperz} alt={"paperz"} />
            <Sponsor classNameSponsor={"dorfus"} image={img_dorfus} alt={"dorfus"} />
            <Sponsor classNameSponsor={"martino"} image={img_martino} alt={"martino"} />
            <Sponsor classNameSponsor={"square"} image={img_square} alt={"square"} />
            <Sponsor classNameSponsor={"gobona"} image={img_gobona} alt={"gobona"} />
        </div>
    </section>
  )
}

export default Sponsors