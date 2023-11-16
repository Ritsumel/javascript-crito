import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ArticleAndNews from '@components/ArticleAndNews'
import SmallShowcase from '@components/SmallShowcase'
import Article from '@components/Article'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
        <Header />

        <main>
        <SmallShowcase headline="News & Articles" link1="Home" link2="News" goto="/News" />
        <Article />
        <ArticleAndNews backgroundColor="#F0EFE9" />
        </main>
        
        <Footer />
    </div>
  )
}

export default NewsDetails