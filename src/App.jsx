import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
// You can create and import other pages like Events.jsx and Contact.jsx here

function App() {
  const headerImage = "https://www.matdogs.com/wp-content/uploads/2018/10/cropped-website_header_2019-01.png";

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header headerImage={headerImage} />

      <main className="container mx-auto p-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          {/* Add routes for other pages here */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;