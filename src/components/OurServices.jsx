import React from 'react'
import { Link } from 'react-router-dom'
import img_background_lines_right from '@images/background-lines-right.svg'

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
                <div className="business-advice">
                    <div className="border-left"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <Link to="/BusinessAdvice"><button className="btn-yellow btn-arrow"><i className="fa-light fa-arrow-right"></i></button></Link>
                </div>
                <div className="startup-business">
                    <div className="border-left"></div>
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <Link to="StartupBusiness"><button className="btn-yellow btn-arrow"><i className="fa-light fa-arrow-right"></i></button></Link>
                </div>
                <div className="financial-advice">
                    <div className="border-left"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <Link to="FinancialAdvice"><button className="btn-yellow btn-arrow"><i className="fa-light fa-arrow-right"></i></button></Link>
                </div>
                <div className="risk-management">
                    <div className="border-left"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <Link to="RiskManagement"><button className="btn-yellow btn-arrow"><i className="fa-light fa-arrow-right"></i></button></Link>
                </div>
            </div> 
            <Link to="/Services"><div className="button-browse"><button className="btn-yellow btn-browse">Browse Services <i className="fa-regular fa-arrow-up-right"></i></button></div></Link>
        </div>
    </section>
  )
}

export default OurServices