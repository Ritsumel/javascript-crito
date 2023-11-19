import React from 'react'
import { useProducts } from './contexts/ProductContext';

const ArticleList = () => {
    const { articles } = useProducts()

  return (
    <div className='article-list'>
        {articles.map(article => (
            <Link key={article.id} to={`/newsdetails/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div to="" className='fetched-article container'>
                <div className='images'>
                    <div className='images-box'>
                        <div className="yellow-box"><p id="p3">{new Date(article.published).getDate()}</p><p id="p4">{new Date(article.published).toLocaleString('default', {month: 'short' })}</p></div>
                        <img src={article.imageUrl} alt={article.title} />
                    </div>
                </div>
                <p id="p1">{article.category}</p>
                <h2>{article.title}</h2>
                <p id="p2">{article.content}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default ArticleList