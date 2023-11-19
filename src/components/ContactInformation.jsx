import React from 'react'
import ContactInformationCard from './generics/ContactInformationCard'

const ContactInformation = () => {
  return (
    <section className="contact-information">
        <div className="container">
            <ContactInformationCard className={"visit-us"} classNameIcon={"fa-sharp fa-solid fa-location-dot"} title={"Visit us"} information1={"Sveavägen 31"} information2={"111 34 STOCKHOLM"} />
            <ContactInformationCard className={"call-us"} classNameIcon={"fa-solid fa-phone"} title={"Call us"} information1={"+46 (8) 121 470 50"} information2={"+46 (8) 121 470 51"} />
            <ContactInformationCard className={"email-us"} classNameIcon={"fa-solid fa-envelope"} title={"Email us"} information1={"info@crito.com"} information2={"support@crito.com"} />
        </div>
    </section>
  )
}

export default ContactInformation