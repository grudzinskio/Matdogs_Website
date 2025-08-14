import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/newsData.json')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch news data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center p-10">Loading News...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Matdogs News</h1>
      <div className="space-y-6">
        {articles.map(article => (
          <NewsCard
            key={article.id}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </div>
  );
}

export default News;