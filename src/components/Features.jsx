import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="border-around"></div>
            <div className="box1">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Link to="/Services" className="btn-yellow btn-learnmore">Learn More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="box2">
                <div className="business-advice">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup-business">
                    <i className="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="financial-advice">
                    <i className="fa-regular fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="risk-management">
                    <i className="fa-regular fa-folder-gear"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features