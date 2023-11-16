import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_logo from '@images/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
          <button className="btn-menubars"><i className="fa-solid fa-bars"></i></button>
          <div className="logotype">
              <Link to="/"><img src={img_logo} alt="crito logotype" /></Link>
          </div>
          <div className="contactinformation-bar">
              <div className="content-box">
                  <i className="fa-sharp fa-regular fa-phone-volume"></i>
                  +46 (8) 121 470 50
              </div>
              <div className="content-box">
                  <i className="fa-regular fa-envelope"></i>
                  info@crito.com
              </div>
              <div className="content-box last">
                  <i className="fa-regular fa-location-dot"></i>
                  Sveavägen 31, 111 34 STOCKHOLM
              </div>
          </div>
          <div className="socialmedia-bar">
              <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https:twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="menu">
              <nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/Services">Services</NavLink>
                  <NavLink to="/News">News</NavLink>
                  <NavLink to="/Contact">Contact</NavLink>
              </nav>
              <Link to="/Login" className="btn-yellow btn-login">Login <i className="fa-regular fa-arrow-up-right"></i></Link>
          </div>
      </div>
    </header>
  )
}

export default Header