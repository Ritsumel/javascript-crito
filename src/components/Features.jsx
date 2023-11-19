import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from './generics/FeatureCard'

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
                <FeatureCard className={"business-advice"} classNameIcon={"fa-regular fa-handshake"} title={"Business Advice"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
                <FeatureCard className={"startup-business"} classNameIcon={"fa-regular fa-lightbulb-on"} title={"Startup Business"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
                <FeatureCard className={"financial-advice"} classNameIcon={"fa-regular fa-chart-mixed-up-circle-dollar"} title={"Financial Advice"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
                <FeatureCard className={"risk-management"} classNameIcon={"fa-regular fa-folder-gear"} title={"Risk Management"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
            </div>
        </div>
    </section>
  )
}

export default Features