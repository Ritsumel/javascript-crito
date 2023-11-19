import React from 'react'
import { Link } from 'react-router-dom'
import img_kristine_palmer from '@images/kristine-palmer.jpg'
import img_mark_aubri from '@images/mark-aubri.jpg'
import img_kimberly_hansen from '@images/kimberly-hansen.jpg'
import img_justin_willoman from '@images/justin-willoman.jpg'
import Member from './generics/Member'
import Dots from './generics/dots'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="box1">
                <div className="texts">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2> 
                </div>
                <div className="browse-team-button">
                    <Link to="/Team" className="btn-yellow btn-transparent">Browse Team <i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="box2">
                <Member className={'kristine-palmer'} image={img_kristine_palmer} alt={'woman with brown hair smiling wearing a gray blazer'} name={'Kristine Palmer'} position={'Chef Operation Officer'} />
                <Member className={'mark-aubri'} image={img_mark_aubri} alt={'guy smiling holding his hands wearing a suit'} name={'Mark Aubri'} position={'Senior Consultant'} />
                <Member className={'kimberly-hansen'} image={img_kimberly_hansen} alt={'woman with black hair smiling by a window while holding hands over a book'} name={'Kimberly Hansen'} position={'Senior Consultant'} />
                <Member className={'justin-willoman'} image={img_justin_willoman} alt={'guy smiling with dark brown hair wearing a black jacket standing against a white wall'} name={'Justin Willoman'} position={'Senior Tech Consultant'} />
            </div>
            <div className="dots">
                <Dots />
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeam