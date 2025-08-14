import React from 'react';

// The header image URL is passed in as a "prop"
function Header({ headerImage }) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <img src={headerImage} alt="Cedarburg Wrestling" className="h-16" />
        <nav>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">News</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Events</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;