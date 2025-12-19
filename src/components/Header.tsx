import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  headerImage: string;
}

function Header({ headerImage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
  const [clubOpen, setClubOpen] = useState(false);

  const photoYears = [
    { year: '2022', path: '/photos/2022' },
    { year: '2020', path: '/photos/2020' },
    { year: '2019', path: '/photos/2019' },
    { year: '2018', path: '/photos/2018' },
    { year: '2017', path: '/photos/2017' },
    { year: '2016', path: '/photos/2016' },
    { year: '2015', path: '/photos/2015' },
    { year: '2014', path: '/photos/2014' },
  ];

  const clubSubmenu = [
    { name: 'Mission', path: '/club/mission' },
    { name: 'Matdog Elite', path: '/club/matdog-elite' },
    { name: 'Grant Schoen Tournament', path: '/club/grant-schoen' },
    { name: 'Committee Members', path: '/club/leadership' },
    { name: 'Resources', path: '/club/resources' },
    { name: 'Documents', path: '/club/documents' },
    { name: 'Volunteer', path: '/club/volunteer' },
    { name: 'Tournament Schedule', path: '/club/tournament-schedule' },
    { name: 'Wrestling Gear', path: '/club/gear' },
  ];

  return (
    <header className="header sticky top-0 z-[1000]">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={headerImage} alt="Cedarburg Wrestling" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-2 items-center flex-nowrap w-full justify-end">
          <Link to="/" className="nav-link text-sm px-2">Home</Link>
          <Link to="/news" className="nav-link text-sm px-2">News</Link>
          
          {/* Calendar with submenu */}
          <div className="relative group">
            <Link to="/events" className="nav-link text-sm px-2 flex items-center gap-1">
              Calendar
              <ChevronDown size={14} />
            </Link>
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">
              <Link to="/events/sync" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary text-sm">
                Sync to your Phone
              </Link>
            </div>
          </div>

          {/* Photos with dropdown */}
          <div className="relative group">
            <button className="nav-link text-sm px-2 flex items-center gap-1">
              Photos
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] max-h-[400px] overflow-y-auto">
              {photoYears.map((item) => (
                <Link 
                  key={item.year} 
                  to={item.path}
                  className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary text-sm"
                >
                  {item.year} Season
                </Link>
              ))}
            </div>
          </div>

          {/* Our Club with dropdown */}
          <div className="relative group">
            <button className="nav-link text-sm px-2 flex items-center gap-1">
              Our Club
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px] max-h-[400px] overflow-y-auto">
              {clubSubmenu.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/join" className="nav-link text-sm px-2">Join</Link>
          <Link to="/sponsors" className="nav-link text-sm px-2">Sponsors</Link>
          <Link to="/contact" className="nav-link text-sm px-2">Contact</Link>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 ml-4 border-l border-gray-600 pl-4">
            <a href="https://www.facebook.com/matdogs" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition duration-200">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com/matdogs" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-primary transition duration-200">
              <Twitter size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-[#1a1a1a] flex flex-col items-start space-y-2 p-4 absolute w-full shadow-md z-50 border-t border-gray-700">
          <Link to="/" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/news" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>News</Link>
          
          <div className="w-full">
            <button 
              onClick={() => setPhotosOpen(!photosOpen)}
              className="nav-link w-full text-left flex items-center justify-between"
            >
              Photos
              <ChevronDown size={16} className={photosOpen ? 'rotate-180' : ''} />
            </button>
            {photosOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {photoYears.map((item) => (
                  <Link 
                    key={item.year} 
                    to={item.path}
                    className="block text-gray-400 hover:text-primary py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.year} Season
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="w-full">
            <button 
              onClick={() => setClubOpen(!clubOpen)}
              className="nav-link w-full text-left flex items-center justify-between"
            >
              Our Club
              <ChevronDown size={16} className={clubOpen ? 'rotate-180' : ''} />
            </button>
            {clubOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {clubSubmenu.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className="block text-gray-400 hover:text-primary py-1 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/events" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>Calendar</Link>
          <Link to="/join" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>Join Our Club</Link>
          <Link to="/sponsors" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>Sponsors</Link>
          <Link to="/contact" className="nav-link w-full text-left" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          <div className="flex space-x-4 pt-4 border-t border-gray-700 w-full justify-center">
            <a href="https://www.facebook.com/matdogs" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com/matdogs" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-primary">
              <Twitter size={20} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
