import React from 'react';

function NewsCard({ title, date, excerpt, category }) {
  const getCardClass = (category) => {
    const baseClass = "news-card";
    switch (category) {
      case 'Registration': return `${baseClass} registration`;
      case 'Events': return `${baseClass} events`;
      case 'Tournament': return `${baseClass} tournament`;
      case 'Special Events': return `${baseClass} special-events`;
      case 'Fundraising': return `${baseClass} fundraising`;
      default: return baseClass;
    }
  };

  return (
    <div className={getCardClass(category)}>
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold text-dark flex-1 pr-4">{title}</h2>
        {category && (
          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wide">
            {category}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4 font-medium">{date}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{excerpt}</p>
      <button className="text-primary hover:text-dark font-semibold transition duration-200 uppercase tracking-wide text-sm">
        Read More →
      </button>
    </div>
  );
}

export default NewsCard;