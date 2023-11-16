import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SmallShowcase from '@components/SmallShowcase'
import ContactInformation from '@components/ContactInformation'
import MessageForms from '@components/MessageForms'

const Contact = () => {
  return (
    <div className='wrapper'>
        <Header />

        <main>
        <SmallShowcase headline="Let's Connect" link1="Home" link2="Contact" goto="/Contact" />
        <ContactInformation />
        <MessageForms />
        </main>
        
        <Footer />
    </div>
  )
}

export default Contact