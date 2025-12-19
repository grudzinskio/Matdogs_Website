import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import { NewsArticle } from '../types';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/newsData.json')
      .then(response => response.json())
      .then((data: NewsArticle[]) => {
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
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">News</h1>
        <p className="text-lg text-gray-600">Stay up to date with the latest Cedarburg Matdogs wrestling news and events</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
      </motion.div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredArticles.map(article => (
          <NewsCard
            key={article.id}
            title={article.title}
            date={article.date}
            author={article.author}
            excerpt={article.excerpt}
            category={article.category}
            image={article.image}
            link={article.link}
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
