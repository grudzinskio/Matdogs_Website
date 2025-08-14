import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // 1. Import Link

function Header({ headerImage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Define links in one place
  const navLinks = (
    <>
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/news" className="text-gray-700 hover:text-blue-600">News</Link>
      {/* <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link> */}
      {/* <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link> */}
    </>
  );

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/"><img src={headerImage} alt="Cedarburg Wrestling" className="h-16" /></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">{navLinks}</nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white flex flex-col items-center space-y-4 p-4 absolute w-full shadow-md">
          {navLinks}
        </nav>
      )}
    </header>
  );
}

export default Header;