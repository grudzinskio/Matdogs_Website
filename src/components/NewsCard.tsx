import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  category: string;
  image?: string;
  link?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

function NewsCard({ title, date, author, excerpt, category, image, link }: NewsCardProps) {
  const getCardClass = (category: string): string => {
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
    <motion.article 
      className={`${getCardClass(category)} overflow-hidden`}
      {...fadeInUp}
    >
      {image && (
        <div className="w-full h-64 overflow-hidden mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </div>
          {author && (
            <div className="flex items-center gap-1">
              <User size={14} />
              {author}
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{excerpt}</p>
        
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-dark font-semibold transition duration-200 uppercase tracking-wide text-sm inline-flex items-center gap-2"
          >
            Continue Reading ››
          </a>
        ) : (
          <button className="text-primary hover:text-dark font-semibold transition duration-200 uppercase tracking-wide text-sm">
            Read More →
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default NewsCard;
