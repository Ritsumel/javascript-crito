import React, { useEffect, useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ArticleAndNews from '@components/ArticleAndNews'
import SmallShowcase from '@components/SmallShowcase'
import { useProducts } from '../components/contexts/ProductContext'
import { useParams } from 'react-router-dom'
import SingleArticle from '../components/SingleArticle'

const NewsDetails = () => {
  const { id } = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    getArticle()
  }, [id])


  const getArticle = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

      if (result.status === 200) 
      setArticle(await result.json())
    }
  }

/*   const { article, getArticle, clearArticle } = useProducts()
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
        <SingleArticle
        id={article.id}
        title={article.title}
        content={article.content}
        imageUrl={article.imageUrl}
        published={article.published}
        category={article.category}
        author={article.author}
         />
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