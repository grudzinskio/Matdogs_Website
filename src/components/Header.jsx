import React, { useState } from 'react'; // 1. Import useState
import { FiMenu, FiX } from 'react-icons/fi'; // 2. Import icons

function Header({ headerImage }) {
  // 3. Create a state variable to track if the menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <img src={headerImage} alt="Cedarburg Wrestling" className="h-16" />

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">News</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Events</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Menu Button (only visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered based on 'isOpen' state) */}
      {isOpen && (
        <nav className="md:hidden bg-white flex flex-col items-center space-y-4 p-4 absolute w-full shadow-md">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">News</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Events</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;