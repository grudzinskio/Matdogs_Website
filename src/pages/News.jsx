import React from 'react';

function NewsCard({ title, date, excerpt, category }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Registration': return 'border-blue-500 bg-blue-50';
      case 'Events': return 'border-green-500 bg-green-50';
      case 'Tournament': return 'border-purple-500 bg-purple-50';
      case 'Special Events': return 'border-red-500 bg-red-50';
      case 'Fundraising': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getCategoryTextColor = (category) => {
    switch (category) {
      case 'Registration': return 'text-blue-700';
      case 'Events': return 'text-green-700';
      case 'Tournament': return 'text-purple-700';
      case 'Special Events': return 'text-red-700';
      case 'Fundraising': return 'text-yellow-700';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md border-l-4 transition duration-200 hover:shadow-lg ${getCategoryColor(category)}`}>
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-2xl font-bold text-gray-800 flex-1 pr-4">{title}</h2>
        {category && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getCategoryTextColor(category)} bg-white bg-opacity-70`}>
            {category}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4 font-medium">{date}</p>
      <p className="text-gray-700 leading-relaxed">{excerpt}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold transition duration-200">
        Read More →
      </button>
    </div>
  );
}

export default NewsCard;