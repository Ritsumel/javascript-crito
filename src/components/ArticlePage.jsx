import React, { useState, useEffect } from 'react'
import FetchedArticle from './generics/FetchedArticle';
import NextPageScroller from './generics/NextPageScroller'

const ArticlePage = ({ maxArticles }) => {
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
    <section className='article-page-section container'>
        <h2 id="h2-1">Our News & Articles</h2>
        <div className='article-list'>
            {articles.map(article => (
                <FetchedArticle
                    /* key={article.id} */
                    /* id={article.id} */
                    title={article.title}
                    content={article.content}
                    imageUrl={article.imageUrl}
                    published={article.published}
                    category={article.category}
                />
            ))}
        </div>
    <NextPageScroller />
    </section>
  );
};

export default ArticlePage