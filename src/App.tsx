import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';
import JoinClub from './pages/JoinClub';
import Photos from './pages/Photos';
import Mission from './pages/club/Mission';
import MatdogElite from './pages/club/MatdogElite';
import GrantSchoen from './pages/club/GrantSchoen';
import Leadership from './pages/club/Leadership';
import Resources from './pages/club/Resources';
import Documents from './pages/club/Documents';
import Volunteer from './pages/club/Volunteer';
import TournamentSchedule from './pages/club/TournamentSchedule';
import Gear from './pages/club/Gear';

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
          <Route path="/events/sync" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Sync Calendar to Your Phone - Coming Soon</h1></div>} />
          
          {/* Photos routes */}
          <Route path="/photos/:year" element={<Photos />} />
          <Route path="/photos" element={<Photos />} />
          
          {/* Our Club routes */}
          <Route path="/club/mission" element={<Mission />} />
          <Route path="/club/matdog-elite" element={<MatdogElite />} />
          <Route path="/club/grant-schoen" element={<GrantSchoen />} />
          <Route path="/club/leadership" element={<Leadership />} />
          <Route path="/club/resources" element={<Resources />} />
          <Route path="/club/documents" element={<Documents />} />
          <Route path="/club/volunteer" element={<Volunteer />} />
          <Route path="/club/tournament-schedule" element={<TournamentSchedule />} />
          <Route path="/club/gear" element={<Gear />} />
          
          {/* Other routes */}
          <Route path="/join" element={<JoinClub />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
