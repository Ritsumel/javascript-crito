import React, { useContext } from 'react'
import FetchedArticle from './FetchedArticle';
import { Link } from 'react-router-dom'
import { ArticlesContext }  from '../contexts/ArticlesContext'


const Articles = ({ maxArticles }) => {
    const articles = useContext(ArticlesContext);

    const articlesToDisplay = maxArticles ? articles.slice(0, maxArticles) : articles;

  return (
    <div className='article-list'>
        {articlesToDisplay.map(article => (
            <Link 
            key={article.id} 
            to={`/newsdetails/${article.id}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}>

            <FetchedArticle
            id={article.id}
            title={article.title}
            content={article.content}
            imageUrl={article.imageUrl}
            published={article.published}
            category={article.category}
            />
            </Link>
        ))}
    </div>
  )
}

export default Articles