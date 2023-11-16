import React from 'react'
import { Link } from 'react-router-dom'
import img_background_wavy_lines from '@images/background-wavy-lines.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={img_background_wavy_lines} alt="" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Link><button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button></Link>
            </form>
        </div>
    </section>
  )
}

export default Newsletter