import React from 'react'
import { Link } from 'react-router-dom'
import img_background_lines_white_right from '@images/background-lines-white-right.svg'
import img_logotype_white from '@images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
      <img className="background-lines-white-right" src={img_background_lines_white_right} />
      <div className="container">
          <div className="box1">
              <div className="logotype">
                  <Link to="/"><img src={img_logotype_white} /></Link>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
              </div>
              <div className="company">
                  <h3>Company</h3>
                  <nav>
                      <Link to="/AboutCompany">About</Link><br></br>
                      <Link to="/Features">Features</Link><br></br>
                      <Link to="/Works">Works</Link><br></br>
                      <Link to="/Career">Career</Link>
                  </nav>
              </div>
              <div className="help">
                  <h3>Help</h3>
                  <nav>
                      <Link to="/CustomerSupport">Customer Support</Link><br></br>
                      <Link to="/DeliveryDetails">Delivery Details</Link><br></br>
                      <Link to="/TurnsAndConditions">Turns & Conditions</Link><br></br>
                      <Link to="PrivacyPolicy">Privacy Policy</Link>
                  </nav>
              </div>
              <div className="resources">
                  <h3>Resources</h3>
                  <nav>
                      <Link to="/Ebooks">Free eBooks</Link><br></br>
                      <Link to="/DevelopmentTutorial">Development Tutorial</Link><br></br>
                      <Link to="/HowToBlog">How to - Blog</Link><br></br>
                      <a href="https://youtube/crito-playlist">Youtube Playlist</a>
                  </nav>
              </div>
              <div className="link">
                  <h3>Link</h3>
                  <nav>
                      <Link to="/Ebooks">Free eBooks</Link><br></br>
                      <Link to="/DevelopmentTutorial">Development Tutorial</Link><br></br>
                      <Link to="/HowToBlog">How to - Blog</Link><br></br>
                      <a href="https://youtube/crito-playlist">Youtube Playlist</a>
                  </nav>
              </div>
          </div>
      </div>
      <div className="line"></div>
      <div className="container">
          <div className="box2">
          <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="socialmedia-bar">
              <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https:twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer