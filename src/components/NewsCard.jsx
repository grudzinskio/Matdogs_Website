import React from 'react';

function NewsCard({ title, date, excerpt }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-4">{excerpt}</p>
    </div>
  );
}

export default NewsCard;