import React from 'react'
import { Link } from 'react-router-dom'
import img_background_lines_right from '@images/background-lines-right.svg'
import ServiceCard from './generics/ServiceCard'

const OurServices = () => {
  return (
    <section className="our-services">
        <img className="background-lines-right" src={img_background_lines_right} />
        <div className="container">
            <div className="texts">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="boxes">
                <ServiceCard className={"business-advice"} title={"Business Advice"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."} link={"/BusinessAdvice"} />
                <ServiceCard className={"startup-business"} title={"Startup Business"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."} link={"/StartupBusiness"} />
                <ServiceCard className={"financial-advice"} title={"Financial Advice"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."} link={"/FinancialAdvice"} />
                <ServiceCard className={"risk-management"} title={"Risk Management"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."} link={"/RiskManagement"} />
            </div> 
            <Link to="/Services"><div className="button-browse"><button className="btn-yellow btn-browse">Browse Services <i className="fa-regular fa-arrow-up-right"></i></button></div></Link>
        </div>
    </section>
  )
}

export default OurServices