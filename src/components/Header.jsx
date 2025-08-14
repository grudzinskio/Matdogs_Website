import React, { useState } from 'react';
import { FiMenu, FiX, FiFacebook, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header({ headerImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">Home</Link>
      <Link to="/news" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">News</Link>
      <Link to="/events" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">Events</Link>
      <Link to="/club" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">Club Info</Link>
      <Link to="/join" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">Join</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">Contact</Link>
    </>
  );

  return (
    <header className="header">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={headerImage} alt="Cedarburg Wrestling" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4 items-center flex-nowrap w-full justify-end">
          <Link to="/" className="nav-link text-sm px-1">Home</Link>
          <Link to="/news" className="nav-link text-sm px-1">News</Link>
          <Link to="/events" className="nav-link text-sm px-1">Events</Link>
          <Link to="/club" className="nav-link text-sm px-1">Club Info</Link>
          <Link to="/join" className="nav-link text-sm px-1">Join</Link>
          <Link to="/contact" className="nav-link text-sm px-1">Contact</Link>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 ml-6 border-l border-gray-300 pl-6">
            <a href="https://www.facebook.com/matdogs" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition duration-200">
              <FiFacebook size={20} />
            </a>
            <a href="https://twitter.com/matdogs" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-primary transition duration-200">
              <FiTwitter size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white flex flex-col items-center space-y-4 p-4 absolute w-full shadow-md z-50 border-t border-gray-200">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/club" className="nav-link">Club Info</Link>
          <Link to="/join" className="nav-link">Join</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="flex space-x-4 pt-4 border-t border-gray-200 w-full justify-center">
            <a href="https://www.facebook.com/matdogs" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary">
              <FiFacebook size={20} />
            </a>
            <a href="https://twitter.com/matdogs" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-primary">
              <FiTwitter size={20} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;