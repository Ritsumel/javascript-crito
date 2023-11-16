import React from 'react'
import { Link } from 'react-router-dom'
import img_girl_walking from '@images/girl-walking.jpg'
import img_background_lines_white_left from '@images/background-lines-white-left.svg'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="box1">
                <img className="girl-walking" src={img_girl_walking} alt="girl walking in a hallway with ipad" />
                <img className="background-lines-white-left" src={img_background_lines_white_left} />
                <div className="blue-box">
                    <div className="SB-founder">
                        <span className="name">Samantha Brown, </span><span className="position">Founder</span>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
                <div className="shadow-box"></div>
            </div>
            <div className="box2">
                <p id="p1">About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    <div className="buttons">
                        <Link to="/AboutCompany"><button className="btn-yellow btn-black">Learn More <i className="fa-regular fa-arrow-up-right"></i></button></Link>
                        <Link to="/IntroVideo"><button className="btn-yellow btn-intro"><i className="fa-sharp fa-solid fa-play"></i></button></Link>
                        <Link to="/IntroVideo" className='intro-video-link'>Intro Video</Link>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany