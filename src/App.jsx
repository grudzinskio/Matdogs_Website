import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';

function App() {
  const headerImage = "https://www.matdogs.com/wp-content/uploads/2018/10/cropped-website_header_2019-01.png";

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      <Header headerImage={headerImage} />

      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          {/* Placeholder routes for future pages */}
          <Route path="/club" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Club Info - Coming Soon</h1></div>} />
          <Route path="/join" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Join the Matdogs - Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Contact Us - Coming Soon</h1></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;