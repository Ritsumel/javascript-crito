import React from 'react'

const ContactInformation = () => {
  return (
    <section className="contact-information">
        <div className="container">
            <div className="visit-us">
                <div className="icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                <h3>Visit us</h3>
                <p id="p1">Sveavägen 31</p>
                <p id="p2">111 34 STOCKHOLM</p>
            </div>
            <div className="call-us">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                <h3>Call us</h3>
                <p id="p1">+46 (8) 121 470 50</p>
                <p id="p2">+46 (8) 121 470 51</p>
            </div>
            <div className="email-us">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                <h3>Email us</h3>
                <p id="p1">info@crito.com</p>
                <p id="p2">support@crito.com</p>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation