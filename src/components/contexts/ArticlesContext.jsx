import React, { createContext, useContext, useState, useEffect } from 'react';

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children, maxArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const queryParam = maxArticles ? `?take=${maxArticles}` : '';
        const response = await fetch(
          `https://win23-assignment.azurewebsites.net/api/articles${queryParam}`
        );
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
    <ArticlesContext.Provider value={articles}>
      {children}
    </ArticlesContext.Provider>
  )
}

