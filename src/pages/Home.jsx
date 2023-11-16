import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'
import Sponsors from '@components/Sponsors'
import Features from '@components/Features'
import AboutCompany from '@components/AboutCompany'
import OurServices from '@components/OurServices'
import WhyChooseUs from '@components/WhyChooseUs'
import ProjectAndCase from '@components/ProjectAndCase'
import MeetOurTeam from '@components/MeetOurTeam'
import Testimonial from '@components/Testimonial'
import ArticleAndNews from '@components/ArticleAndNews'
import Newsletter from '@components/Newsletter'

const Home = () => {
  return (
    <div className='wrapper'>
        <Header />

        <main>
        <Showcase />
        <Sponsors />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCase />
        <MeetOurTeam />
        <Testimonial />
        <ArticleAndNews backgroundColor="white" />
        <Newsletter />
        </main>

        <Footer />
    </div>
  )
}

export default Home