import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Newsletter from '@components/Newsletter'
import SmallShowcase from '@components/SmallShowcase'
import ArticlePage from '../components/ArticlePage'

const News = () => {

  return (
    <div className='wrapper'>
        <Header />

        <main>
        <SmallShowcase headline="News & Articles" link1="Home" link2="News" />
        <ArticlePage />
        <Newsletter />
        </main>
        
        <Footer />
    </div>
  )
}

export default News