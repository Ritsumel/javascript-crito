import React, { useState, useEffect } from 'react'
import FetchedArticle from './FetchedArticle';
import { Link } from 'react-router-dom'

const Articles = ({ maxArticles }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const queryParam = maxArticles ? `?take=${maxArticles}` : '';
                const response = await fetch (`https://win23-assignment.azurewebsites.net/api/articles${queryParam}`);
                if (response.ok) {
                    const data = await response.json();
                    setArticles(data);
                } else {
                    console.error('Failed to fetch articles');
                }
            } catch (error) {
                console.error('Error fetching articles: ', error);
            }
        };

        fetchArticles();
    }, [maxArticles]);

  return (
    <div className='article-list'>
        {articles.map(article => (
            <Link key={article.id} to={`/newsdetails/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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