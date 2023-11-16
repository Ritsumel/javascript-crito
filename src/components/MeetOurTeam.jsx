import React from 'react'
import { Link } from 'react-router-dom'
import img_kristine_palmer from '@images/kristine-palmer.jpg'
import img_mark_aubri from '@images/mark-aubri.jpg'
import img_kimberly_hansen from '@images/kimberly-hansen.jpg'
import img_justin_willoman from '@images/justin-willoman.jpg'

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
                <div className="kristine-palmer">
                    <img src={img_kristine_palmer} alt="woman with brown hair smiling wearing a gray blazer" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="mark-aubri">
                    <img src={img_mark_aubri} alt="guy smiling holding his hands wearing a suit" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="kimberly-hansen">
                    <img src={img_kimberly_hansen} alt="woman with black hair smiling by a window while holding hands over a book" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="justin-willoman">
                    <img src={img_justin_willoman} alt="guy smiling with dark brown hair wearing a black jacket standing against a white wall" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="dots">
            <nav>
                <a href="#"></a>
                <a className="active" href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </nav>
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeam