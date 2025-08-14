import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', ...new Set(articles.map(article => article.category))];
  
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  if (isLoading) {
    return <div className="text-center p-10">Loading News...</div>;
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Matdogs News</h1>
        <p className="text-lg text-gray-600">Stay up to date with the latest Cedarburg Matdogs wrestling news and events</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-6">
        {filteredArticles.map(article => (
          <NewsCard
            key={article.id}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            category={article.category}
          />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No articles found for the selected category.
        </div>
      )}
    </div>
  );
}

export default News;