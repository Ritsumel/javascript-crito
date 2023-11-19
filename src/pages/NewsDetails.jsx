import React, { useEffect, useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ArticleAndNews from '@components/ArticleAndNews'
import SmallShowcase from '@components/SmallShowcase'
import { UseProducts } from '../components/contexts/ProductContext'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
  const { id } = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    getArticle()
  }, [])


  const getArticle = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23assignimg.blob.core.windows.net/images/${id}`)

      if (result.status === 200) 
      setArticle(await result.json())
    }
  }

/*   const { article, getArticle, clearArticle } = UseProducts()
  const {id} = useParams()

  useEffect(() => {
    getArticle(id)

    return () => clearArticle()
  }, [id]) */

  return (
    <div className='wrapper'>
        <Header />

        <main>
        <SmallShowcase headline="News & Articles" link1="Home" link2="News" goto="/News" />
        <div>{ id }</div>
{/*         {
          article ?
          (
            <div>{article.id}</div>
          )
          :
          (
            <div>Loading...</div>
          )
        } */}
        <ArticleAndNews backgroundColor="#F0EFE9" />
        </main>
        
        <Footer />
    </div>
  )
}

export default NewsDetails